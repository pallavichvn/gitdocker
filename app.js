var cmd=require('node-cmd');

app.post('/gitPush', function (req, res) {
console.log("Received the message inside gitPush->"+ JSON.stringify(req.body));
console.log("Received the message(from Git) inside gitPush->"+ JSON.stringify(req.body));

    cmd.get('bash script.sh',
        function(err, data, stderr){
@@ -32,4 +32,4 @@ console.log("Received the message inside gitPush->"+ JSON.stringify(req.body));



app.listen(app.get('port')); 
app.listen(app.get('port'));
