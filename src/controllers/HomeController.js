class HomeController {
  index(req, res) {
    res.json({
      tudo_certo: true,
    });
    console.log("teste");
  }
}

export default new HomeController();
