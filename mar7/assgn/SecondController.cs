using Microsoft.AspNetCore.Mvc;

namespace MVCDemo1.Controllers
{
    public class SecondController : Controller
    {
        public IActionResult Index1()
        {
            return Content("SecondController - Index1");
        }

        public IActionResult Index2()
        {
            return Content("SecondController - Index2");
        }

        public IActionResult Index3()
        {
            return Content("SecondController - Index3");
        }
    }
}
