module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))