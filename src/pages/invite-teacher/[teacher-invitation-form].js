import React,{useState , useEffect} from "react";
import InputForTeacherInvitation from "@/components/InputForTeacherInvitation";
import SelectOptionForTeacherInvite from "@/components/SelectOptionForTeacherInvite";
import RadioButtonForTeacherInvitation from "@/components/RadioButtonForTeacherInvitation";
import QuestionRadioButton from "@/components/QuestionRadioButton";
import Loading from "@/components/loading";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"



export default function teacherIinvitationForm() {
    // const states = ["استان مرکزی" , "استان مازندران"]
    const[foucosTextArea , setFoucosTextArea]=useState(false)
    const [startDate , setStartDate]=useState("")
    const [untilDate , setUntilDate] = useState("")
    console.log(startDate);
    console.log(untilDate);

   const states = [
    {
      "message": "لیست شهر ها با موفقیت بازگردانده شد .",
      "data": [
          {
              "id": 1,
              "countFile": 0,
              "county": [
                  {
                      "id": 2,
                      "countFile": 10,
                      "name": "آشتیان",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 4,
                      "countFile": 0,
                      "name": "خمین",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 6,
                      "countFile": 0,
                      "name": "تفرش",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 8,
                      "countFile": 0,
                      "name": "دلیجان",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 11,
                      "countFile": 0,
                      "name": "ساوه",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 16,
                      "countFile": 2,
                      "name": "شازند",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 22,
                      "countFile": 1,
                      "name": "محلات",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 25,
                      "countFile": 0,
                      "name": "زرندیه",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 31,
                      "countFile": 0,
                      "name": "کمیجان",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 34,
                      "countFile": 0,
                      "name": "خنداب",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 36,
                      "countFile": 0,
                      "name": "فراهان",
                      "weight": 1,
                      "parent_id": 1
                  },
                  {
                      "id": 39,
                      "countFile": 55,
                      "name": "اراک",
                      "weight": 1,
                      "parent_id": 1
                  }
              ],
              "name": "مرکزی",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 44,
              "countFile": 0,
              "county": [
                  {
                      "id": 45,
                      "countFile": 0,
                      "name": "آستارا",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 48,
                      "countFile": 0,
                      "name": "آستانه اشرفیه",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 50,
                      "countFile": 0,
                      "name": "بندرانزلی",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 52,
                      "countFile": 0,
                      "name": "رشت",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 54,
                      "countFile": 0,
                      "name": "لاهیجان",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 57,
                      "countFile": 0,
                      "name": "رودسر",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 59,
                      "countFile": 0,
                      "name": "طوالش",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 70,
                      "countFile": 0,
                      "name": "صومعه سرا",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 75,
                      "countFile": 0,
                      "name": "رودبار",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 81,
                      "countFile": 0,
                      "name": "رضوانشهر",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 83,
                      "countFile": 0,
                      "name": "املش",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 89,
                      "countFile": 0,
                      "name": "فومن",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 93,
                      "countFile": 0,
                      "name": "شفت",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 95,
                      "countFile": 0,
                      "name": "ماسال",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 101,
                      "countFile": 0,
                      "name": "لنگرود",
                      "weight": 1,
                      "parent_id": 44
                  },
                  {
                      "id": 107,
                      "countFile": 0,
                      "name": "سیاهکل",
                      "weight": 1,
                      "parent_id": 44
                  }
              ],
              "name": "گیلان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 97,
              "countFile": 0,
              "county": [
                  {
                      "id": 98,
                      "countFile": 1,
                      "name": "آمل",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 109,
                      "countFile": 0,
                      "name": "تنکابن",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 114,
                      "countFile": 0,
                      "name": "بابل",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 121,
                      "countFile": 0,
                      "name": "بهشهر",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 127,
                      "countFile": 0,
                      "name": "سوادکوه",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 129,
                      "countFile": 0,
                      "name": "رامسر",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 132,
                      "countFile": 0,
                      "name": "ساری",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 138,
                      "countFile": 0,
                      "name": "نوشهر",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 141,
                      "countFile": 0,
                      "name": "قایم شهر",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 144,
                      "countFile": 0,
                      "name": "نور",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 149,
                      "countFile": 0,
                      "name": "بابلسر",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 153,
                      "countFile": 0,
                      "name": "چالوس",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 155,
                      "countFile": 0,
                      "name": "سوادکوه شمالی",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 157,
                      "countFile": 0,
                      "name": "محمودآباد",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 159,
                      "countFile": 0,
                      "name": "نکا",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 162,
                      "countFile": 0,
                      "name": "جویبار",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 164,
                      "countFile": 0,
                      "name": "سیمرغ",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 166,
                      "countFile": 0,
                      "name": "فریدونکنار",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 168,
                      "countFile": 0,
                      "name": "عباس آباد",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 172,
                      "countFile": 0,
                      "name": "میاندورود",
                      "weight": 1,
                      "parent_id": 97
                  },
                  {
                      "id": 174,
                      "countFile": 0,
                      "name": "کلاردشت",
                      "weight": 1,
                      "parent_id": 97
                  }
              ],
              "name": "مازندران",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 176,
              "countFile": 0,
              "county": [
                  {
                      "id": 177,
                      "countFile": 0,
                      "name": "اهر",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 180,
                      "countFile": 0,
                      "name": "سراب",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 185,
                      "countFile": 0,
                      "name": "مراغه",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 187,
                      "countFile": 0,
                      "name": "تبریز",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 192,
                      "countFile": 0,
                      "name": "مرند",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 197,
                      "countFile": 0,
                      "name": "میانه",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 202,
                      "countFile": 0,
                      "name": "هشترود",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 205,
                      "countFile": 0,
                      "name": "بناب",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 207,
                      "countFile": 0,
                      "name": "بستان آباد",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 209,
                      "countFile": 0,
                      "name": "شبستر",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 218,
                      "countFile": 0,
                      "name": "کلیبر",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 221,
                      "countFile": 0,
                      "name": "هریس",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 226,
                      "countFile": 0,
                      "name": "جلفا",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 229,
                      "countFile": 0,
                      "name": "ملکان",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 232,
                      "countFile": 0,
                      "name": "آذرشهر",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 236,
                      "countFile": 0,
                      "name": "خداآفرین",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 238,
                      "countFile": 0,
                      "name": "ورزقان",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 240,
                      "countFile": 0,
                      "name": "عجب شیر",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 242,
                      "countFile": 0,
                      "name": "اسکو",
                      "weight": 1,
                      "parent_id": 176
                  },
                  {
                      "id": 245,
                      "countFile": 0,
                      "name": "چاراویماق",
                      "weight": 1,
                      "parent_id": 176
                  }
              ],
              "name": "آذربایجان شرقی",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 248,
              "countFile": 0,
              "county": [
                  {
                      "id": 249,
                      "countFile": 0,
                      "name": "ارومیه",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 254,
                      "countFile": 0,
                      "name": "پیرانشهر",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 257,
                      "countFile": 0,
                      "name": "خوی",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 264,
                      "countFile": 0,
                      "name": "سردشت",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 267,
                      "countFile": 0,
                      "name": "ماکو",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 270,
                      "countFile": 0,
                      "name": "سلماس",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 273,
                      "countFile": 0,
                      "name": "میاندوآب",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 277,
                      "countFile": 0,
                      "name": "نقده",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 279,
                      "countFile": 0,
                      "name": "مهاباد",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 282,
                      "countFile": 0,
                      "name": "تکاب",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 285,
                      "countFile": 0,
                      "name": "بوکان",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 287,
                      "countFile": 0,
                      "name": "اشنویه",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 289,
                      "countFile": 0,
                      "name": "شاهین دژ",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 292,
                      "countFile": 0,
                      "name": "چایپاره",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 294,
                      "countFile": 0,
                      "name": "چالدران",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 297,
                      "countFile": 0,
                      "name": "پلدشت",
                      "weight": 1,
                      "parent_id": 248
                  },
                  {
                      "id": 299,
                      "countFile": 0,
                      "name": "شوط",
                      "weight": 1,
                      "parent_id": 248
                  }
              ],
              "name": "آذربایجان غربی",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 301,
              "countFile": 0,
              "county": [
                  {
                      "id": 302,
                      "countFile": 0,
                      "name": "کرمانشاه",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 304,
                      "countFile": 0,
                      "name": "اسلام آبادغرب",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 306,
                      "countFile": 0,
                      "name": "رباط",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 307,
                      "countFile": 0,
                      "name": "کوزران",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 308,
                      "countFile": 0,
                      "name": "پاوه",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 313,
                      "countFile": 0,
                      "name": "سرپل ذهاب",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 315,
                      "countFile": 0,
                      "name": "سنقر",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 318,
                      "countFile": 0,
                      "name": "قصرشیرین",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 320,
                      "countFile": 0,
                      "name": "کنگاور",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 323,
                      "countFile": 0,
                      "name": "گیلانغرب",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 326,
                      "countFile": 0,
                      "name": "جوانرود",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 328,
                      "countFile": 0,
                      "name": "صحنه",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 330,
                      "countFile": 0,
                      "name": "هرسین",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 332,
                      "countFile": 0,
                      "name": "ثلاث باباجانی",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 335,
                      "countFile": 0,
                      "name": "دالاهو",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 339,
                      "countFile": 0,
                      "name": "روانسر",
                      "weight": 1,
                      "parent_id": 301
                  },
                  {
                      "id": 1506,
                      "countFile": 0,
                      "name": "هلشی",
                      "weight": 1,
                      "parent_id": 301
                  }
              ],
              "name": "کرمانشاه",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 341,
              "countFile": 0,
              "county": [
                  {
                      "id": 342,
                      "countFile": 0,
                      "name": "اندیمشک",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 346,
                      "countFile": 0,
                      "name": "اهواز",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 349,
                      "countFile": 0,
                      "name": "آبادان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 354,
                      "countFile": 0,
                      "name": "ایذه",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 356,
                      "countFile": 0,
                      "name": "دزفول",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 362,
                      "countFile": 0,
                      "name": "بندرماهشهر",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 365,
                      "countFile": 0,
                      "name": "بهبهان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 369,
                      "countFile": 0,
                      "name": "خرمشهر",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 373,
                      "countFile": 0,
                      "name": "دشت آزادگان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 377,
                      "countFile": 0,
                      "name": "مسجدسلیمان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 384,
                      "countFile": 0,
                      "name": "رامهرمز",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 386,
                      "countFile": 0,
                      "name": "شادگان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 390,
                      "countFile": 0,
                      "name": "شوشتر",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 395,
                      "countFile": 0,
                      "name": "شوش",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 400,
                      "countFile": 0,
                      "name": "باغ ملک",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 405,
                      "countFile": 0,
                      "name": "امیدیه",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 407,
                      "countFile": 0,
                      "name": "لالی",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 409,
                      "countFile": 0,
                      "name": "هندیجان",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 412,
                      "countFile": 0,
                      "name": "اندیکا",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 414,
                      "countFile": 0,
                      "name": "هویزه",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 416,
                      "countFile": 0,
                      "name": "رامشیر",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 419,
                      "countFile": 0,
                      "name": "گتوند",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 425,
                      "countFile": 0,
                      "name": "هفتکل",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 427,
                      "countFile": 0,
                      "name": "باوی",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 431,
                      "countFile": 0,
                      "name": "حمیدیه",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 433,
                      "countFile": 0,
                      "name": "آغاجاری",
                      "weight": 1,
                      "parent_id": 341
                  },
                  {
                      "id": 435,
                      "countFile": 0,
                      "name": "کارون",
                      "weight": 1,
                      "parent_id": 341
                  }
              ],
              "name": "خوزستان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 437,
              "countFile": 0,
              "county": [
                  {
                      "id": 438,
                      "countFile": 0,
                      "name": "آباده",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 444,
                      "countFile": 0,
                      "name": "استهبان",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 447,
                      "countFile": 0,
                      "name": "اقلید",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 451,
                      "countFile": 0,
                      "name": "جهرم",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 456,
                      "countFile": 0,
                      "name": "شیراز",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 459,
                      "countFile": 0,
                      "name": "سپیدان",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 461,
                      "countFile": 0,
                      "name": "داراب",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 471,
                      "countFile": 0,
                      "name": "فسا",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 477,
                      "countFile": 0,
                      "name": "فیروزآباد",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 480,
                      "countFile": 0,
                      "name": "کازرون",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 486,
                      "countFile": 0,
                      "name": "لارستان",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 493,
                      "countFile": 0,
                      "name": "مرودشت",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 500,
                      "countFile": 0,
                      "name": "ممسنی",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 504,
                      "countFile": 0,
                      "name": "نی ریز",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 508,
                      "countFile": 0,
                      "name": "لامرد",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 513,
                      "countFile": 0,
                      "name": "بوانات",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 517,
                      "countFile": 0,
                      "name": "ارسنجان",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 519,
                      "countFile": 0,
                      "name": "خرم بید",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 522,
                      "countFile": 0,
                      "name": "زرین دشت",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 526,
                      "countFile": 0,
                      "name": "قیروکارزین",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 528,
                      "countFile": 0,
                      "name": "مهر",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 530,
                      "countFile": 0,
                      "name": "خنج",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 539,
                      "countFile": 0,
                      "name": "فراشبند",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 543,
                      "countFile": 0,
                      "name": "پاسارگاد",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 546,
                      "countFile": 0,
                      "name": "سروستان",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 548,
                      "countFile": 0,
                      "name": "رستم",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 551,
                      "countFile": 0,
                      "name": "گراش",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 553,
                      "countFile": 0,
                      "name": "کوار",
                      "weight": 1,
                      "parent_id": 437
                  },
                  {
                      "id": 555,
                      "countFile": 0,
                      "name": "خرامه",
                      "weight": 1,
                      "parent_id": 437
                  }
              ],
              "name": "فارس",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 557,
              "countFile": 0,
              "county": [
                  {
                      "id": 558,
                      "countFile": 0,
                      "name": "بم",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 560,
                      "countFile": 0,
                      "name": "بافت",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 563,
                      "countFile": 0,
                      "name": "جیرفت",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 567,
                      "countFile": 0,
                      "name": "رفسنجان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 573,
                      "countFile": 0,
                      "name": "زرند",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 578,
                      "countFile": 0,
                      "name": "شهداد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 579,
                      "countFile": 0,
                      "name": "اندوهجرد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 580,
                      "countFile": 0,
                      "name": "سیرجان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 587,
                      "countFile": 0,
                      "name": "گلباف",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 588,
                      "countFile": 0,
                      "name": "شهربابک",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 594,
                      "countFile": 0,
                      "name": "جوپار",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 595,
                      "countFile": 0,
                      "name": "ماهان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 596,
                      "countFile": 0,
                      "name": "محی آباد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 597,
                      "countFile": 0,
                      "name": "باغین",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 598,
                      "countFile": 0,
                      "name": "زنگی آباد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 599,
                      "countFile": 0,
                      "name": "اختیارآباد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 600,
                      "countFile": 0,
                      "name": "راین",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 601,
                      "countFile": 0,
                      "name": "چترود",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 602,
                      "countFile": 0,
                      "name": "کاظم آباد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 603,
                      "countFile": 0,
                      "name": "کهنوج",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 605,
                      "countFile": 0,
                      "name": "بردسیر",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 611,
                      "countFile": 0,
                      "name": "راور",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 613,
                      "countFile": 0,
                      "name": "عنبرآباد",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 617,
                      "countFile": 0,
                      "name": "منوجان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 620,
                      "countFile": 0,
                      "name": "کوهبنان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 622,
                      "countFile": 0,
                      "name": "رودبارجنوب",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 624,
                      "countFile": 0,
                      "name": "قلعه گنج",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 626,
                      "countFile": 0,
                      "name": "ریگان",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 629,
                      "countFile": 0,
                      "name": "رابر",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 632,
                      "countFile": 0,
                      "name": "فهرج",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 634,
                      "countFile": 0,
                      "name": "انار",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 637,
                      "countFile": 0,
                      "name": "نرماشیر",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 640,
                      "countFile": 0,
                      "name": "فاریاب",
                      "weight": 1,
                      "parent_id": 557
                  },
                  {
                      "id": 642,
                      "countFile": 0,
                      "name": "ارزوییه",
                      "weight": 1,
                      "parent_id": 557
                  }
              ],
              "name": "کرمان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 644,
              "countFile": 0,
              "county": [
                  {
                      "id": 645,
                      "countFile": 0,
                      "name": "درگز",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 649,
                      "countFile": 0,
                      "name": "تایباد",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 653,
                      "countFile": 0,
                      "name": "تربت حیدریه",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 656,
                      "countFile": 0,
                      "name": "سبزوار",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 658,
                      "countFile": 0,
                      "name": "تربت جام",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 663,
                      "countFile": 0,
                      "name": "قوچان",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 669,
                      "countFile": 0,
                      "name": "کاشمر",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 671,
                      "countFile": 0,
                      "name": "گناباد",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 674,
                      "countFile": 0,
                      "name": "مشهد",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 678,
                      "countFile": 0,
                      "name": "نیشابور",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 685,
                      "countFile": 0,
                      "name": "چناران",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 688,
                      "countFile": 0,
                      "name": "خواف",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 691,
                      "countFile": 0,
                      "name": "سرخس",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 695,
                      "countFile": 0,
                      "name": "فریمان",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 700,
                      "countFile": 0,
                      "name": "بردسکن",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 703,
                      "countFile": 0,
                      "name": "رشتخوار",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 705,
                      "countFile": 0,
                      "name": "بینالود",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 707,
                      "countFile": 0,
                      "name": "خلیل آباد",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 709,
                      "countFile": 0,
                      "name": "کلات",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 711,
                      "countFile": 0,
                      "name": "مه ولات",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 714,
                      "countFile": 0,
                      "name": "بجستان",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 718,
                      "countFile": 0,
                      "name": "جغتای",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 720,
                      "countFile": 0,
                      "name": "فیروزه",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 723,
                      "countFile": 0,
                      "name": "زاوه",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 725,
                      "countFile": 0,
                      "name": "داورزن",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 727,
                      "countFile": 0,
                      "name": "خوشاب",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 729,
                      "countFile": 0,
                      "name": "جوین",
                      "weight": 1,
                      "parent_id": 644
                  },
                  {
                      "id": 731,
                      "countFile": 0,
                      "name": "باخرز",
                      "weight": 1,
                      "parent_id": 644
                  }
              ],
              "name": "خراسان رضوی",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 733,
              "countFile": 0,
              "county": [
                  {
                      "id": 734,
                      "countFile": 0,
                      "name": "چادگان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 737,
                      "countFile": 0,
                      "name": "دهاقان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 740,
                      "countFile": 0,
                      "name": "فلاورجان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 747,
                      "countFile": 0,
                      "name": "کوهپایه",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 748,
                      "countFile": 0,
                      "name": "سجزی",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 749,
                      "countFile": 0,
                      "name": "تودشک",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 750,
                      "countFile": 0,
                      "name": "اردستان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 753,
                      "countFile": 0,
                      "name": "نیک آباد",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 754,
                      "countFile": 0,
                      "name": "قهجاورستان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 755,
                      "countFile": 0,
                      "name": "بهارستان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 756,
                      "countFile": 0,
                      "name": "زیار",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 757,
                      "countFile": 0,
                      "name": "ورزنه",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 758,
                      "countFile": 0,
                      "name": "هرند",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 759,
                      "countFile": 0,
                      "name": "اژیه",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 760,
                      "countFile": 0,
                      "name": "خمینی شهر",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 765,
                      "countFile": 0,
                      "name": "خوانسار",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 767,
                      "countFile": 0,
                      "name": "سمیرم",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 771,
                      "countFile": 0,
                      "name": "فریدن",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 774,
                      "countFile": 0,
                      "name": "فریدونشهر",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 779,
                      "countFile": 0,
                      "name": "شهرضا",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 782,
                      "countFile": 0,
                      "name": "کاشان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 789,
                      "countFile": 0,
                      "name": "گلپایگان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 793,
                      "countFile": 0,
                      "name": "لنجان",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 803,
                      "countFile": 0,
                      "name": "نایین",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 806,
                      "countFile": 0,
                      "name": "نجف آباد",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 813,
                      "countFile": 0,
                      "name": "نطنز",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 818,
                      "countFile": 0,
                      "name": "شاهین شهرومیمه",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 822,
                      "countFile": 0,
                      "name": "مبارکه",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 824,
                      "countFile": 0,
                      "name": "آران وبیدگل",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 836,
                      "countFile": 0,
                      "name": "تیران وکرون",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 839,
                      "countFile": 0,
                      "name": "برخوار",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 846,
                      "countFile": 0,
                      "name": "خور و بیابانک",
                      "weight": 1,
                      "parent_id": 733
                  },
                  {
                      "id": 849,
                      "countFile": 0,
                      "name": "بو یین و میاندشت",
                      "weight": 1,
                      "parent_id": 733
                  }
              ],
              "name": "اصفهان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 852,
              "countFile": 0,
              "county": [
                  {
                      "id": 853,
                      "countFile": 0,
                      "name": "ایرانشهر",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 858,
                      "countFile": 0,
                      "name": "چابهار",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 860,
                      "countFile": 0,
                      "name": "خاش",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 863,
                      "countFile": 0,
                      "name": "زابل",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 866,
                      "countFile": 0,
                      "name": "زاهدان",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 869,
                      "countFile": 0,
                      "name": "سراوان",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 874,
                      "countFile": 0,
                      "name": "نیک شهر",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 877,
                      "countFile": 0,
                      "name": "سرباز",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 880,
                      "countFile": 0,
                      "name": "کنارک",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 882,
                      "countFile": 0,
                      "name": "زهک",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 884,
                      "countFile": 0,
                      "name": "هیرمند",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 886,
                      "countFile": 0,
                      "name": "دلگان",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 888,
                      "countFile": 0,
                      "name": "مهرستان",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 890,
                      "countFile": 0,
                      "name": "سیب و سوران",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 892,
                      "countFile": 0,
                      "name": "نیمروز",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 894,
                      "countFile": 0,
                      "name": "لوتک",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 896,
                      "countFile": 0,
                      "name": "میرجاوه",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 898,
                      "countFile": 0,
                      "name": "هامون",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 900,
                      "countFile": 0,
                      "name": "فنوج",
                      "weight": 1,
                      "parent_id": 852
                  },
                  {
                      "id": 902,
                      "countFile": 0,
                      "name": "قصرقند",
                      "weight": 1,
                      "parent_id": 852
                  }
              ],
              "name": "سیستان وبلوچستان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 904,
              "countFile": 0,
              "county": [
                  {
                      "id": 905,
                      "countFile": 0,
                      "name": "بانه",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 909,
                      "countFile": 0,
                      "name": "بیجار",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 914,
                      "countFile": 0,
                      "name": "سقز",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 916,
                      "countFile": 0,
                      "name": "سنندج",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 919,
                      "countFile": 0,
                      "name": "قروه",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 924,
                      "countFile": 0,
                      "name": "مریوان",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 928,
                      "countFile": 0,
                      "name": "دیواندره",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 930,
                      "countFile": 0,
                      "name": "کامیاران",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 933,
                      "countFile": 0,
                      "name": "سروآباد",
                      "weight": 1,
                      "parent_id": 904
                  },
                  {
                      "id": 935,
                      "countFile": 0,
                      "name": "دهگلان",
                      "weight": 1,
                      "parent_id": 904
                  }
              ],
              "name": "کردستان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 938,
              "countFile": 0,
              "county": [
                  {
                      "id": 939,
                      "countFile": 0,
                      "name": "تویسرکان",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 942,
                      "countFile": 0,
                      "name": "رزن",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 944,
                      "countFile": 0,
                      "name": "فامنین",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 946,
                      "countFile": 0,
                      "name": "ملایر",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 950,
                      "countFile": 0,
                      "name": "اسدآباد",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 954,
                      "countFile": 0,
                      "name": "نهاوند",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 958,
                      "countFile": 0,
                      "name": "قهاوند",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 959,
                      "countFile": 0,
                      "name": "مریانج",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 960,
                      "countFile": 0,
                      "name": "جورقان",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 961,
                      "countFile": 0,
                      "name": "کبودرآهنگ",
                      "weight": 1,
                      "parent_id": 938
                  },
                  {
                      "id": 965,
                      "countFile": 0,
                      "name": "بهار",
                      "weight": 1,
                      "parent_id": 938
                  }
              ],
              "name": "همدان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 970,
              "countFile": 0,
              "county": [
                  {
                      "id": 971,
                      "countFile": 0,
                      "name": "بروجن",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 977,
                      "countFile": 0,
                      "name": "شهرکرد",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 987,
                      "countFile": 0,
                      "name": "فارسان",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 991,
                      "countFile": 0,
                      "name": "اردل",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 993,
                      "countFile": 0,
                      "name": "کوهرنگ",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 998,
                      "countFile": 0,
                      "name": "لردگان",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 1006,
                      "countFile": 0,
                      "name": "کیار",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 1011,
                      "countFile": 0,
                      "name": "سامان",
                      "weight": 1,
                      "parent_id": 970
                  },
                  {
                      "id": 1013,
                      "countFile": 0,
                      "name": "بن",
                      "weight": 1,
                      "parent_id": 970
                  }
              ],
              "name": "چهارمحال وبختیاری",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1016,
              "countFile": 0,
              "county": [
                  {
                      "id": 1017,
                      "countFile": 0,
                      "name": "الیگودرز",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1019,
                      "countFile": 0,
                      "name": "بروجرد",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1024,
                      "countFile": 0,
                      "name": "دلفان",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1026,
                      "countFile": 0,
                      "name": "دورود",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1028,
                      "countFile": 0,
                      "name": "کوهدشت",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1032,
                      "countFile": 0,
                      "name": "ازنا",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1034,
                      "countFile": 0,
                      "name": "پلدختر",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1037,
                      "countFile": 0,
                      "name": "سلسله",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1039,
                      "countFile": 0,
                      "name": "دوره",
                      "weight": 1,
                      "parent_id": 1016
                  },
                  {
                      "id": 1042,
                      "countFile": 0,
                      "name": "رومشکان",
                      "weight": 1,
                      "parent_id": 1016
                  }
              ],
              "name": "لرستان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1044,
              "countFile": 0,
              "county": [
                  {
                      "id": 1045,
                      "countFile": 0,
                      "name": "ایلام",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1047,
                      "countFile": 0,
                      "name": "دره شهر",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1050,
                      "countFile": 0,
                      "name": "دهلران",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1053,
                      "countFile": 0,
                      "name": "چرداول",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1059,
                      "countFile": 0,
                      "name": "مهران",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1061,
                      "countFile": 0,
                      "name": "آبدانان",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1064,
                      "countFile": 0,
                      "name": "ایوان",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1066,
                      "countFile": 0,
                      "name": "ملکشاهی",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1069,
                      "countFile": 0,
                      "name": "سیروان",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1071,
                      "countFile": 0,
                      "name": "بدره",
                      "weight": 1,
                      "parent_id": 1044
                  },
                  {
                      "id": 1513,
                      "countFile": 0,
                      "name": "چوار",
                      "weight": 1,
                      "parent_id": 1044
                  }
              ],
              "name": "ایلام",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1073,
              "countFile": 0,
              "county": [
                  {
                      "id": 1074,
                      "countFile": 0,
                      "name": "بویراحمد",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1080,
                      "countFile": 0,
                      "name": "کهگیلویه",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1085,
                      "countFile": 0,
                      "name": "گچساران",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1087,
                      "countFile": 0,
                      "name": "دنا",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1090,
                      "countFile": 0,
                      "name": "بهمیی",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1092,
                      "countFile": 0,
                      "name": "چرام",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1095,
                      "countFile": 0,
                      "name": "باشت",
                      "weight": 1,
                      "parent_id": 1073
                  },
                  {
                      "id": 1097,
                      "countFile": 0,
                      "name": "لنده",
                      "weight": 1,
                      "parent_id": 1073
                  }
              ],
              "name": "کهگیلویه وبویراحمد",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1099,
              "countFile": 0,
              "county": [
                  {
                      "id": 1100,
                      "countFile": 0,
                      "name": "بوشهر",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1102,
                      "countFile": 0,
                      "name": "چغادک",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1103,
                      "countFile": 0,
                      "name": "عالی شهر",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1104,
                      "countFile": 0,
                      "name": "تنگستان",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1108,
                      "countFile": 0,
                      "name": "دشتستان",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1118,
                      "countFile": 0,
                      "name": "دشتی",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1123,
                      "countFile": 0,
                      "name": "دیر",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1129,
                      "countFile": 0,
                      "name": "کنگان",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1133,
                      "countFile": 0,
                      "name": "گناوه",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1135,
                      "countFile": 0,
                      "name": "جم",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1138,
                      "countFile": 0,
                      "name": "عسلویه",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1142,
                      "countFile": 0,
                      "name": "دیلم",
                      "weight": 1,
                      "parent_id": 1099
                  },
                  {
                      "id": 1515,
                      "countFile": 0,
                      "name": "خارک",
                      "weight": 1,
                      "parent_id": 1099
                  }
              ],
              "name": "بوشهر",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1145,
              "countFile": 0,
              "county": [
                  {
                      "id": 1146,
                      "countFile": 0,
                      "name": "ماهنشان",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1149,
                      "countFile": 0,
                      "name": "سلطانیه",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1151,
                      "countFile": 0,
                      "name": "ایجرود",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1154,
                      "countFile": 0,
                      "name": "خرمدره",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1156,
                      "countFile": 0,
                      "name": "طارم",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1159,
                      "countFile": 0,
                      "name": "ابهر",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1163,
                      "countFile": 0,
                      "name": "خدابنده",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1171,
                      "countFile": 0,
                      "name": "نیک پی",
                      "weight": 1,
                      "parent_id": 1145
                  },
                  {
                      "id": 1172,
                      "countFile": 0,
                      "name": "ارمغانخانه",
                      "weight": 1,
                      "parent_id": 1145
                  }
              ],
              "name": "زنجان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1173,
              "countFile": 0,
              "county": [
                  {
                      "id": 1174,
                      "countFile": 0,
                      "name": "سمنان",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1176,
                      "countFile": 0,
                      "name": "دامغان",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1180,
                      "countFile": 0,
                      "name": "شاهرود",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1186,
                      "countFile": 0,
                      "name": "گرمسار",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1188,
                      "countFile": 0,
                      "name": "مهدی شهر",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1191,
                      "countFile": 0,
                      "name": "آرادان",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1194,
                      "countFile": 0,
                      "name": "میامی",
                      "weight": 1,
                      "parent_id": 1173
                  },
                  {
                      "id": 1196,
                      "countFile": 0,
                      "name": "سرخه",
                      "weight": 1,
                      "parent_id": 1173
                  }
              ],
              "name": "سمنان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1198,
              "countFile": 0,
              "county": [
                  {
                      "id": 1199,
                      "countFile": 0,
                      "name": "اردکان",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1202,
                      "countFile": 0,
                      "name": "بافق",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1204,
                      "countFile": 0,
                      "name": "تفت",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1206,
                      "countFile": 0,
                      "name": "ابرکوه",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1209,
                      "countFile": 0,
                      "name": "مهریز",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1211,
                      "countFile": 0,
                      "name": "شاهدیه",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1212,
                      "countFile": 0,
                      "name": "حمیدیا",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1213,
                      "countFile": 0,
                      "name": "زارچ",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1214,
                      "countFile": 0,
                      "name": "میبد",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1219,
                      "countFile": 0,
                      "name": "اشکذر",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1221,
                      "countFile": 0,
                      "name": "بهاباد",
                      "weight": 1,
                      "parent_id": 1198
                  },
                  {
                      "id": 1223,
                      "countFile": 0,
                      "name": "خاتم",
                      "weight": 1,
                      "parent_id": 1198
                  }
              ],
              "name": "یزد",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1226,
              "countFile": 0,
              "county": [
                  {
                      "id": 1227,
                      "countFile": 0,
                      "name": "ابوموسی",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1229,
                      "countFile": 0,
                      "name": "بندرعباس",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1234,
                      "countFile": 0,
                      "name": "بندرلنگه",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1239,
                      "countFile": 0,
                      "name": "قشم",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1243,
                      "countFile": 0,
                      "name": "میناب",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1247,
                      "countFile": 0,
                      "name": "جاسک",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1250,
                      "countFile": 0,
                      "name": "رودان",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1254,
                      "countFile": 0,
                      "name": "حاجی اباد",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1257,
                      "countFile": 0,
                      "name": "بستک",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1259,
                      "countFile": 0,
                      "name": "خمیر",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1261,
                      "countFile": 0,
                      "name": "پارسیان",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1263,
                      "countFile": 0,
                      "name": "سیریک",
                      "weight": 1,
                      "parent_id": 1226
                  },
                  {
                      "id": 1266,
                      "countFile": 0,
                      "name": "بشاگرد",
                      "weight": 1,
                      "parent_id": 1226
                  }
              ],
              "name": "هرمزگان",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1268,
              "countFile": 0,
              "county": [
                  {
                      "id": 1269,
                      "countFile": 0,
                      "name": "تهران",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1271,
                      "countFile": 0,
                      "name": "دماوند",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1277,
                      "countFile": 0,
                      "name": "ری",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1280,
                      "countFile": 0,
                      "name": "ملارد",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1282,
                      "countFile": 0,
                      "name": "پیشوا",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1287,
                      "countFile": 0,
                      "name": "شمیرانات",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1292,
                      "countFile": 0,
                      "name": "ورامین",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1294,
                      "countFile": 0,
                      "name": "شهریار",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1302,
                      "countFile": 0,
                      "name": "اسلامشهر",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1306,
                      "countFile": 0,
                      "name": "رباط کریم",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1310,
                      "countFile": 0,
                      "name": "پاکدشت",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1313,
                      "countFile": 0,
                      "name": "فیروزکوه",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1315,
                      "countFile": 0,
                      "name": "قدس",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1317,
                      "countFile": 0,
                      "name": "پردیس",
                      "weight": 1,
                      "parent_id": 1268
                  },
                  {
                      "id": 1319,
                      "countFile": 0,
                      "name": "قرچک",
                      "weight": 1,
                      "parent_id": 1268
                  }
              ],
              "name": "تهران",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1321,
              "countFile": 0,
              "county": [
                  {
                      "id": 1322,
                      "countFile": 0,
                      "name": "بیله سوار",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1324,
                      "countFile": 0,
                      "name": "خلخال",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1327,
                      "countFile": 0,
                      "name": "هیر",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1328,
                      "countFile": 0,
                      "name": "مشگین شهر",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1334,
                      "countFile": 0,
                      "name": "گرمی",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1336,
                      "countFile": 0,
                      "name": "پارس آباد",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1341,
                      "countFile": 0,
                      "name": "کوثر",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1343,
                      "countFile": 0,
                      "name": "نمین",
                      "weight": 1,
                      "parent_id": 1321
                  },
                  {
                      "id": 1347,
                      "countFile": 0,
                      "name": "سرعین",
                      "weight": 1,
                      "parent_id": 1321
                  }
              ],
              "name": "اردبیل",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1349,
              "countFile": 0,
              "county": [
                  {
                      "id": 1350,
                      "countFile": 0,
                      "name": "قم",
                      "weight": 1,
                      "parent_id": 1349
                  },
                  {
                      "id": 1352,
                      "countFile": 0,
                      "name": "دستجرد",
                      "weight": 1,
                      "parent_id": 1349
                  },
                  {
                      "id": 1353,
                      "countFile": 0,
                      "name": "قنوات",
                      "weight": 1,
                      "parent_id": 1349
                  },
                  {
                      "id": 1354,
                      "countFile": 0,
                      "name": "کهک",
                      "weight": 1,
                      "parent_id": 1349
                  },
                  {
                      "id": 1355,
                      "countFile": 0,
                      "name": "سلفچگان",
                      "weight": 1,
                      "parent_id": 1349
                  },
                  {
                      "id": 1519,
                      "countFile": 0,
                      "name": "جعفریه",
                      "weight": 1,
                      "parent_id": 1349
                  }
              ],
              "name": "قم",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1356,
              "countFile": 0,
              "county": [
                  {
                      "id": 1357,
                      "countFile": 0,
                      "name": "بویین زهرا",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1362,
                      "countFile": 0,
                      "name": "تاکستان",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1367,
                      "countFile": 0,
                      "name": "معلم کلایه",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1368,
                      "countFile": 0,
                      "name": "رازمیان",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1369,
                      "countFile": 0,
                      "name": "سیردان",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1370,
                      "countFile": 0,
                      "name": "اقبالیه",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1371,
                      "countFile": 0,
                      "name": "محمودآبادنمونه",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1372,
                      "countFile": 0,
                      "name": "کوهین",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1373,
                      "countFile": 0,
                      "name": "آبیک",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1375,
                      "countFile": 0,
                      "name": "البرز",
                      "weight": 1,
                      "parent_id": 1356
                  },
                  {
                      "id": 1380,
                      "countFile": 0,
                      "name": "آوج",
                      "weight": 1,
                      "parent_id": 1356
                  }
              ],
              "name": "قزوین",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1422,
              "countFile": 0,
              "county": [
                  {
                      "id": 1423,
                      "countFile": 0,
                      "name": "اسفراین",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1425,
                      "countFile": 0,
                      "name": "بجنورد",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1429,
                      "countFile": 0,
                      "name": "جاجرم",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1432,
                      "countFile": 0,
                      "name": "راز و جرگلان",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1434,
                      "countFile": 0,
                      "name": "شیروان",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1438,
                      "countFile": 0,
                      "name": "فاروج",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1440,
                      "countFile": 0,
                      "name": "مانه وسملقان",
                      "weight": 1,
                      "parent_id": 1422
                  },
                  {
                      "id": 1445,
                      "countFile": 0,
                      "name": "گرمه",
                      "weight": 1,
                      "parent_id": 1422
                  }
              ],
              "name": "خراسان شمالی",
              "weight": 1,
              "parent_id": null
          },
          {
              "id": 1448,
              "countFile": 0,
              "county": [
                  {
                      "id": 1449,
                      "countFile": 0,
                      "name": "فردوس",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1451,
                      "countFile": 0,
                      "name": "بیرجند",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1453,
                      "countFile": 0,
                      "name": "درمیان",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1458,
                      "countFile": 0,
                      "name": "سربیشه",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1461,
                      "countFile": 0,
                      "name": "قاینات",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1467,
                      "countFile": 0,
                      "name": "نهبندان",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1469,
                      "countFile": 0,
                      "name": "بشرویه",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1471,
                      "countFile": 0,
                      "name": "سرایان",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1475,
                      "countFile": 0,
                      "name": "زیرکوه",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1478,
                      "countFile": 0,
                      "name": "خوسف",
                      "weight": 1,
                      "parent_id": 1448
                  },
                  {
                      "id": 1480,
                      "countFile": 0,
                      "name": "طبس",
                      "weight": 1,
                      "parent_id": 1448
                  }
              ],
              "name": "خراسان جنوبی",
              "weight": 1,
              "parent_id": null
          }
      ],
      "code": 200,
      "status": 1
  }
   ]
   
    const organs = ["مسجد" , "اداره" , "شرکت"]
    const [selectedState , setSelectedState]=useState("")
    // const [requestingOrgan , setReguestingOrgan]=useState("")
    const [allState , setAllstate] = useState("")
    const [allCities , setAllCities]=useState("")
    
    

    useEffect(()=>{
      states.map(state=> setAllstate(state["data"]))
    
      
    },[])
   
  
    const handleStateChange = (event)=>{
        setSelectedState(event.target.value)
        
    }
    
    const handleReguestingOrganChange = (event)=>{
      setReguestingOrgan(event.target.value)

    }
   
  
      if(!allState && !allCities){
      return <Loading/>
    }
   
  return (
    <div className="w-full h-max bg-neutral-100 pt-8 sm:pt-16 pb-32zzzz">
      <div className="container h-max mx-auto sm:px-2 ">
        <div className="bg-white pb-8 px-4 sm:px-6 h-max flex flex-col gap-y-6 sm:border border-stone-300  sm:rounded-xl leading-7 sm:leading-8 text-sm sm:text-base">

        <div className='w-full  h-max flex flex-col items-center gap-y-3 pt-12'>
        <div className='flex items-center'>
            
        <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-5 w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
            <h1 className='xs:text-sm text-xl font-bold'>دریافت اطلاعات مجموعه درخواست کننده</h1>
        </div>
        <p className="xs:text-[12px]">لطفا پیش از ارسال ایمیل یا تماس تلفنی، ابتدا <span className='text-cyan-600'>قوانین</span> را مشاهده کنید.</p>
        </div>

        <div className="w-full  h-max  flex flex-col gap-y-6 sm:gap-y-0  sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
            
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select value={selectedState} onChange={handleStateChange} className="w-full outline-none bg-inherit cursor-pointer h-full" >
                <option value="">انتخاب استان</option>
                {allState.map(item=><option key={item.id}  value={item.name} >{item.name}</option>)}
            </select>
            </div>
            </div>
           
            {/* <SelectOptionForTeacherInvite content="انتخاب استان"  handleChanging={handleStateChange}  initialValue={selectedState}  items={allState}/> */}
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select  className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">انتخاب شهر</option>
                {/* { allState.filter(item =>{if(item.parent_id === selectedState.id){
                  console.log(item);
                } } )} */}
            </select>
            </div>
            </div>
        </div>

        <div className="w-full h-max  flex flex-col gap-y-6 sm:gap-y-0   sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
            
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select  onChange={handleReguestingOrganChange} className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">مجموعه درخواست کننده</option>
                {organs.map(organ =>
                    <option key={organ} value={organ}>{organ}</option>
                    )}
            </select>
            </div>
            </div>
            <div className="w-full sm:w-[280px] md:w-[340px] h-[65px] mb-2  lg:w-[470px] xl:w-[600px] 2xl:w-[720px] flex items-center justify-center ">
          <InputForTeacherInvitation content="سایت مجموعه" type="text"/>
            
            </div>

        </div>

        <div className="w-full h-max  flex flex-col gap-y-6   sm:flex-row justify-start gap-x-3 items-center flex-wrap" >
            
            
           

       <InputForTeacherInvitation content="ایمیل مجموعه" type="email"/>
       <InputForTeacherInvitation content="نشانی صفحه مجازی" type="text"/>
       <InputForTeacherInvitation content="شماره تماس مجموعه" type="tel"/>
            

           
        </div>
        </div>

        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm  text-xl font-bold">مشخصات محل برگزاری</h2>
        </div>
        <p className="xs:text-[10px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        
        <div className="w-full  h-max  flex flex-col gap-y-6 sm:gap-y-0  sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="نام مکان برگزاری همایش" type="text"/>
          <SelectOptionForTeacherInvite items={states} content="ظرفیت دقیق محل پیشنهادی"/>
          <textarea onBlur={()=>setFoucosTextArea(false)} onFocus={()=>setFoucosTextArea(true)} className={` ${foucosTextArea ? 'border-cyan-600' : 'border-stone-300' } resize-none w-full sm:w-[570px] md:w-[692px] lg:w-[950px] xl:w-[1212px] h-52 border-2 rounded-xl mt-4 pr-4 outline-0 pt-2" `} ></textarea>
        </div>

        </div>
        </div>

        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm text-xl font-bold">مشخصات نماینده / رابط جلسه</h2>
        </div>
        <p className="xs:text-[12px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        
        <div className="w-full px-4  flex  h-max">
        <div className="w-full  h-max  flex flex-col  gap-y-3  sm:flex-row justify-start gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="نام مکان برگزاری همایش" type="text"/>
          <InputForTeacherInvitation content="تلفن همراه" type="tel"/>
          <InputForTeacherInvitation content="تلفن ثابت" type="tel"/>
        </div>
        </div>

        </div>
        </div>
        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8 ">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm text-xl font-bold">مشخصات برنامه درخواستی به ترتیب اولویت</h2>
        </div>
        <p className="xs:text-[10px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        <div className="w-full px-4  flex  h-max ">
        <div className="w-full  h-max  flex   gap-y-3  flex-row justify-start gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="موضوع اول" type="text"/>
          <InputForTeacherInvitation content="موضوع دوم" type="text"/>

          <div className="flex flex-col w-full items-start gap-y-4 xs:text-[10px]  ">
          <p className="font-bold xs:text-[12px] pt-8">تاریخ پیشنهادی یا بازه زمانی</p>
          
          <div className="flex items-center flex-wrap gap-y-5 justify-start gap-x-8 sm:gap-x-12">

          
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="انتخاب بازه زمانی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="به انتخاب موسسه"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="تاریخ دقیق"/>

          </div>
         
         <div className=" mt-4 h-max w-max flex items-center xs:gap-x-3  gap-x-8 xs:text-[10px]">
         <div className=" mt-4 h-max w-max flex items-center xs:gap-x-3  gap-x-8 xs:text-[10px]">
                  <div className="flex items-center justify-center xs:gap-x-2 gap-x-3 h-max">
                    <p>از تاریخ</p>
                    <DatePicker  calendar={persian} 
                    locale={persian_fa} selected={startDate} onChange={(date) =>setStartDate(date)} />
                  </div>
                  <div className="flex items-center justify-center xs:gap-x-2 gap-x-3 h-max">
                    <p>تا تاریخ</p>
                    <DatePicker calendar={persian} 
                    locale={persian_fa} selected={untilDate} onChange={(date) =>setUntilDate(date)} />
                  </div>
                   
         </div>
                   
         </div>
          </div>

         
          <QuestionRadioButton>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-2" name={"Participant-range"} value="عمومی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-3" name={"Participant-range"} value="دوره اردویی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-4" name={"Participant-range"} value="کارمندان"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-5" name={"Participant-range"} value="خصوصی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-6" name={"Participant-range"} value="خانواده"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-7" name={"Participant-range"} value="دانشجویی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-8" name={"Participant-range"} value="سایر"/>
          </QuestionRadioButton>
         
          <div className="w-full h-max mt-12 flex items-center flex-wrap ">
          <div className="flex flex-col  gap-y-6 xs:text-[10px]  ">
          <p className="font-bold xs:text-[12px] pt-8">تعداد تقریبی شرکت کنندگان</p>
          <SelectOptionForTeacherInvite items={states} content="ظرفیت دقیق محل پیشنهادی"/>
          </div>
          </div>
          <QuestionRadioButton>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-2" name={"Participant-range"} value="بله"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-3" name={"Participant-range"} value="خیر"/>
          </QuestionRadioButton>

        </div>
        </div>

        </div>
        </div>
      </div>
        <div className="container h-max mx-auto flex justify-center items-center ">
          <button className="xs:w-32 xs:h-12 xs:text-sm w-40 h-16 bg-cyan-600 text-white font-bold rounded-xl">دعوت از استاد</button>
        </div>
    </div>
  );
}
