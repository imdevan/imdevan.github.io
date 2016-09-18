---
layout: blog-article
title: "Case Study on Unit Tests"
color: purple
author: Devan Huapaya
type: 📓
category: blog
---

## Code that needs to be tested

So there we were, trying to create a wrapper for aws to use in our micro-service.
The wrapper would need to take a stream and pass back some kind of confirmation
that reflected what one would expect to get back from aws.

This is the code we came up with

{% highlight js %}
helper.uploadStream = (opts, done) => {
    if (!opts.Bucket) {
        return done(new Error(
            "s3-helper.uploadStream: Bucket param was not provided"));
    }

    if (!opts.Key) {
        return done(new Error(
            "s3-helper.uploadStream: Key param was not provided"));
    }

    if (!opts.Body) {
        return done(new Error(
            "s3-helper.uploadStream: Body param was not provided"));
    }

    logger.info(`Uploading ${opts.Key} to s3`);

    const s3obj = new aws.S3({
        params: {
            Bucket: opts.Bucket,
            Key: opts.Key
        }
    });
dd
    s3obj.upload({Body: opts.Body}).send(done);
};
{% endhighlight %}

`helper.uploadStream` takes an object `opts` and a `callback`.

This is what opts looks like based on the properties that are called throughout
the functtion.

{% highlight js %}
opts = {
    Bucket: <obj>,
    Key: <obj>,
    Body: <stream>
}
{% endhighlight %}

`opts.Bucket` and `opts.Key` are directly applied to the `aws.S3` module.

`opts.Body` is applied when `s3obj.upload` is called.

`aws.S3` creates an object which is than passed a Body which is passed as
property of opts.

We know from looking at the [aws documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-examples.html)
that `s3obj.upload` will return an object that contains the Bucket and Key in a
successful run, and it will return an error otherwise.


From the above code we derive that there are 3 possible cases that needed to be
tested.
{: .br}

## Test cases

### 1. Called with bad params

The test case for this is easy enough. We check for the error returned to match
what we put the error to be returned as.

{% highlight js %}
it("can catch missing bucket param", done => {
    s3Helper.uploadStream({}, err => {
        expect(err).to.exist;
        expect(err.message).to.equal(
            "s3-helper.uploadStream: Bucket param was not provided");
        done();
    });
});

it("can catch missing key param", done => {
    s3Helper.uploadStream({ Bucket: "test-bucket" }, err => {
        expect(err).to.exist;
        expect(err.message).to.equal(
            "s3-helper.uploadStream: Key param was not provided");
        done();
    });
});

it("can catch missing body param", done => {
    s3Helper.uploadStream({ Bucket: "test-bucket", Key: "test-key" }, err => {
        expect(err).to.exist;
        expect(err.message).to.equal(
            "s3-helper.uploadStream: Body param was not provided");
        done();
    });
});
{% endhighlight %}
{: .mt-lg}

### 2. Down Stream Errors

To do this we use a design pattern called `breaker` (or at least that's what I'm
calling it). Basically, we have a mockAws object that has a property called `breakers`.

If we set the breaker for `upload` to true, we should get an error from mockAws,
which `s3Helper` is digesting instead of `aws`, because of another design
pattern, `proxy-require`.

{% highlight js %}
it("can handle an error thrown by aws", done => {
    // Define opts object
    const stream = through2(),
        uploadOpts = {
            Bucket: "test-bucket",
            Key: "test-key",
            Body: stream
        };

    setTimeout(() => {
        stream.write("dummy upload text");
        stream.end();
    });

    // Set breaker error
    mockAWS.breakers.upload = true;

    // Call s3Helper
    s3Helper.uploadStream(uploadOpts, err => {
        expect(err.message).to.equal("mockS3: upload breaker error");
        done();
    });
});
{% endhighlight %}
{: .mt-lg}

### 3. Everything Works! 😀
{% highlight js %}
it("can successfully upload stream", done => {
    // Define opts object
    const stream = through2(),
        uploadOpts = {
            Bucket: "test-bucket",
            Key: "test-key",
            Body: stream
        };

    setTimeout(() => {
        stream.write("dummy upload text");
        stream.end();
    });

    s3Helper.uploadStream(uploadOpts, (err, response) => {
        expect(mockLogger.messages[0].args[0]).to.equal(
            `Uploading ${uploadOpts.Key} to s3`);

        expect(response).to.be.deep.equal({
            Bucket: uploadOpts.Bucket,
            Key: uploadOpts.Key
        });

        done();
    });
});
{% endhighlight %}
{: .mt-lg}


## In conclusion

That's the minimal thought process that should probably go into creating unit
tests for node.

- Would could go wrong that we can handle?
- What could cause this code to break that we can't handle?
- What happens when everything goes well?

If you have any cool tips to share on unit tests, you should definitely tweet them
at me~!

👇
{: .text--center .text--lg}
