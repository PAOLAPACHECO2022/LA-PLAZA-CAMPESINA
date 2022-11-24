let express = require("express");
let router = express.Router();
let userSchema = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.route("/login").post((req, res, next) => {
  let body = req.body;
  userSchema.findOne({ email: body.email }, (erro, usuarioDB) => {
    if (erro) {
      return next(erro);
    }
    // Verifica que exista un usuario con el mail escrita por el usuario.
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
    // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }

    // Genera el token de autenticación
    let token = jwt.sign({ usuario: usuarioDB }, "secretkey", {
      expiresIn: "24h",
    });

    res.header("auth-token", token).json({
      ok: true,
      id: usuarioDB._id,
      token,
    });
  });
});

router.route("/register").post((req, res, next) => {
  let {
    foto,
    nombres,
    apellidos,
    cedula,
    nacimiento,
    celular,
    telfijo,
    direccion,
    eps,
    departamento,
    municipio,
    email,
    password,
  } = req.body;

  userSchema.create(
    {
      foto,
      nombres,
      apellidos,
      cedula,
      nacimiento,
      celular,
      telfijo,
      direccion,
      eps,
      departamento,
      municipio,
      email,
      password: bcrypt.hashSync(password, 10),
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        // Genera el token de autenticación
        let token = jwt.sign({ usuario: data }, "secretkey", {
          expiresIn: "24h",
        });

        res.header("auth-token", token).json({
          ok: true,
          id: data._id,
          token,
        });
      }
    }
  );
});

router.route("/:id").get(verifyToken, (req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:id").put(verifyToken, (req, res, next) => {
  console.log("prueba")
  userSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("user updated successfully !");
        this.props.history.push("update/:id")
      }
    }
  );
});

router.route("/delete-product/:id").delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);   // se puede modificar según los intereses  
    } else {
      res.status(200).json({
      msg: data});

    }
  });
});




function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Acceso denegado" });
  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next(); // continuamos
  } catch (error) {
    res.status(400).json({ error: "token no es válido" });
  }
}

module.exports = router;
