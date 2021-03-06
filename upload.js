const uploadImage = async (req, res) => {
    try {
        let {file} = req.files;
        let extension = file.name.split('.').pop();
        file.name = Date.now() + '.' + extension
        file.mv(`${__dirname}/public/uploads/${file.name}`, function (error) {
            if (error) {
                console.log(error)
                res.json({code: 0, message: error});
            } else {
                res.json({code: 1, message: "Sukses upload file", path: `${file.name}`});
            }
        });
    } catch (err) {
        console.log(err)
        res.json({code: 0, message: err});
    }
}

const uploadExcel = async (req, res) => {
    try {
        const {file} = req.files;
        file.mv(`${__dirname}/public/uploads/excel/${file.name}`, function (error) {
            if (error)
                res.json({code: 0, message: error});
            else {
                res.json({code: 1, message: "Sukses upload file", path: `${file.name}`});
            }
        });
    } catch (err) {
        res.json({code: 0, message: err});
    }
}

module.exports = {
    uploadImage,
    uploadExcel
}
