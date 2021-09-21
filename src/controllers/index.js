exports.helloWorld = (req, res) => {
    res.send("Hello World!")
};

exports.addSteve = (req, res) => {
    const name = req.body.name;
    res.send({ message: `${name} Smells` });
};

exports.readSteve = (req, res) => {
    res.send ({ message: "Successful Get Request" });
};

exports.updateSteve = (req, res) => {
    const update = req.body.name + "2.0";
    res.send ({ message: update });
};

exports.deleteSteve = (req, res) => {
    res.send ({ message: "Successful Delete Request" });
};