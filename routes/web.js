const express = require("express");
const router = express.Router();
const DB = require("../handler/config");

function formatDate(date) {
  var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("");
}

router.get("/", (req, res) => {
  const title = "Undangan Pernikahan";
  return res.render("template1", { title });
});

router.get("/pernikahan/:id", (req, res) => {
  let connect = DB.config;
  let id = req.params.id;
  let tanggal = "tanggal";
  try {
    connect.query("SELECT * FROM pernikahan WHERE id = ?", [id], (error, result) => {
      if (!error && result.length > 0) {
        connect.query("SELECT * FROM gallery WHERE id_pernikahan = ?", [id], (error1, result1) => {
          tanggal = formatDate(result[0].tanggal);
          if (result[0].template === "1") {
            return res.render("template1", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "2") {
            return res.render("template2", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "3") {
            return res.render("template3", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "4") {
            return res.render("template4", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "5") {
            return res.render("template5", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "6") {
            return res.render("template6", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else {
            return res.render("template7", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          }
        });
      } else return res.render("404");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
});

router.get("/pernikahan/:id/RSVP", (req, res) => {
  let connect = DB.config;
  let id = req.params.id;
  let tanggal = "tanggal";
  let kode = "kode";
  try {
    connect.query("SELECT * FROM pernikahan WHERE id = ?", [id], (error, result) => {
      if (!error && result.length > 0) {
        connect.query("SELECT * FROM gallery WHERE id_pernikahan = ?", [id], (error1, result1) => {
          tanggal = formatDate(result[0].tanggal);
          if (result[0].template === "1") {
            return res.render("template1", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "2") {
            return res.render("template2", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "3") {
            return res.render("template3", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "4") {
            return res.render("template4", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "5") {
            return res.render("template5", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else if (result[0].template === "6") {
            return res.render("template6", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          } else {
            return res.render("template7", {
              id: id,
              data: result[0],
              title: "Undangan " + result[0].nama,
              tanggal,
              date: result[0].tanggal,
              gallery: result1,
              kode,
              youtube: result[0].url_livestreaming.replace('watch?v=','embed/'),
              angpau_qr: result[0].angpau_qr,
              angpau_rek_bank: result[0].angpau_rek_bank,
              angpau_rek_nomor: result[0].angpau_rek_nomor,
              angpau_rek_nama: result[0].angpau_rek_nama
            });
          }
        });
      } else return res.render("404");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
});

module.exports = router;
