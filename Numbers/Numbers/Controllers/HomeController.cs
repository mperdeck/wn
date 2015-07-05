using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Numbers.Controllers
{
    /// <summary>
    /// This controller and its view are not really needed in this application.
    /// Could have created a static html file instead.
    /// However, wanted to make it clear that I know MVC.
    /// </summary>
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

    }
}
