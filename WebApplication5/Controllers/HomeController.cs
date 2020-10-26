using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication5.Controllers
{
    public class HomeController : Controller
    {
        public class Student
        {
            public string id { get; set; }
            public string name { get; set; }
            public int score { get; set; }
            public string tel { get; set; }

            public Student()
            {
                id = string.Empty;
                name = string.Empty;
                score = 0;
                tel = string.Empty;
            }

            public Student(string _id, string _name, int _score, string _tel)
            {
                id = _id;
                name = _name;
                score = _score;
                tel = _tel;
            }

            public override string ToString()
            {
                return $"學號:{id}, 姓名:{name}, 分數:{score}, 電話:{tel}";
            }
        }

        public class Student01a
        {
            public string name { get; set; }
           
            public Student01a()
            {
                name = string.Empty;
            }

            public Student01a(string _name)
            {
                name = _name;
            }
            public override string ToString()
            {
                return $"姓名:{name}";
            }
        }


        public ActionResult Index()
        {
            DateTime date = DateTime.Now;
            Student date02 = new Student();
            List<Student> list = new List<Student>();
            list.Add(new Student("1", "小明", 80, "0911111111"));
            list.Add(new Student("2", "小華", 70, "0922222222"));
            list.Add(new Student("3", "小英", 60, "0933333333"));
            list.Add(new Student("4", "小李", 50, "0944444444"));
            list.Add(new Student("5", "小張", 40, "0955555555"));

            List<Student01a> list02 = new List<Student01a>();
            list02.Add(new Student01a("小明"));
            list02.Add(new Student01a("小華"));
            list02.Add(new Student01a("小英"));
            list02.Add(new Student01a("小李"));
            list02.Add(new Student01a("小張"));

            ViewBag.Date = date;
            ViewBag.Student = date02;
            ViewBag.List = list;
            ViewBag.List02 = list02;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult AAA()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult BBB()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}