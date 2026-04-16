/* const songs = [
  {
    "id": 412911648,
    "name": "我们的总和",
    "cover": "http://p2.music.126.net/N1dKedCtsENS59eY0JHUkQ==/109951166489364929.jpg",
    "length": 259272,
    "artist": [
      {
        "name": "艾怡良"
      }
    ],
    "album": "说 艾怡良",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409152138/4e06bfdb89107b019dd3389551d47276/jdyyaac/515c/055d/535e/f64daabf842796de5d1fd4e867ae1b75.m4a?vuutv=jvbFAud4UyTtCyciWROKW5/PIqD0P/egqHq2/XTBKd2nmyarw4AkV3nTs5hThnxXD/qdl4IfR4TWMWVj8uce1Q2CLnrIA/ZzzLzV/RrYNsM=&authSecret=0000019d710752d11b2e0a32b4810006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2000729734,
    "name": "日记",
    "cover": "http://p1.music.126.net/_Qx6Z7LrQKSECUHGfIjAmA==/109951168082083693.jpg",
    "length": 244590,
    "artist": [
      {
        "name": "刘弈画"
      }
    ],
    "album": "2022",
    "fee": 0,
    "url": ""
  },
  {
    "id": 452601866,
    "name": "This Is The Walk",
    "cover": "http://p2.music.126.net/YIFLoDfpwh7gLL4L3CLkuQ==/18719185464601601.jpg",
    "length": 210000,
    "artist": [
      {
        "name": "David O'Dowda"
      }
    ],
    "album": "Look Up",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1358035401,
    "name": "Fallen",
    "cover": "http://p2.music.126.net/HqwTJjN8kCX4Nd9q7YJ_uQ==/109951163990765878.jpg",
    "length": 321492,
    "artist": [
      {
        "name": "Gert Taberner"
      }
    ],
    "album": "Fallen",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1871038669,
    "name": "when i was young",
    "cover": "http://p2.music.126.net/TC_gah7n9eLclV341UKtFA==/109951166302143010.jpg",
    "length": 208285,
    "artist": [
      {
        "name": "Flora Cash"
      }
    ],
    "album": "our generation",
    "fee": 8,
    "url": ""
  },
  {
    "id": 394688,
    "name": "爱像是昨天",
    "cover": "http://p1.music.126.net/_r5w3wpvaY7CWE6I5ZLjMw==/3420580717572688.jpg",
    "length": 299950,
    "artist": [
      {
        "name": "FREE THE BIRD"
      }
    ],
    "album": "回到我",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409152256/9d6b70c444b9824bdd19c5ad6f681ecb/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/17090475931/2fca/b44f/35e7/a86c18a5e622d57145982938d8a49231.m4a?vuutv=VDvcFiDZ5HHRzqyozpsbcNyPlu0gMBCiysm0tp+JoBTpE/oDBoc/267m2Nys1f1YN9XalFVgSPx6KsajIVKXcIGO20oMPUaA0w1LkeSq2yA=&authSecret=0000019d710884c309ce0a3b238322a5&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1304791584,
    "name": "Won't Let You Go",
    "cover": "http://p2.music.126.net/s9eemm1dlwb1gg67tQ_J1A==/109951170196953737.jpg",
    "length": 256966,
    "artist": [
      {
        "name": "Benjamin Ian Cocks"
      },
      {
        "name": "Mo Brandis"
      }
    ],
    "album": "Twenty Something Songs, Vol. 5",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3354884940,
    "name": "风 (一切都像风)",
    "cover": "http://p2.music.126.net/IHHaB6X00VqFW7z35NzWBg==/109951172827084732.jpg",
    "length": 237508,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "风 (一切都像风)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2749424397,
    "name": "自然环境",
    "cover": "http://p2.music.126.net/d2H0OYy8yuphfVj06KBfkg==/109951172059151771.jpg",
    "length": 244288,
    "artist": [
      {
        "name": "陈粒"
      }
    ],
    "album": "贴近大地",
    "fee": 8,
    "url": ""
  },
  {
    "id": 526116066,
    "name": "人啊",
    "cover": "http://p2.music.126.net/lb0uSEy4nd6eQMv7hCbN0Q==/109951171530550836.jpg",
    "length": 219200,
    "artist": [
      {
        "name": "徐佳莹"
      }
    ],
    "album": "心里学",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409152327/f3bee99724e7578b776cf830888df55b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096495171/0191/1b64/3a7d/5d057982e7dfcdd781b068d3488042e4.m4a?vuutv=w1R8rds9BKAKUi02ypaGjzLCD0QsBNuOjqx0nalPXfVs92TJZVDF6VnZN3f6UnI567OwWlync9+tBQ6uxF3NvlJcAXjKRtzWXBmjFHRqNSA=&authSecret=0000019d7108fc94144a0a3b22880581&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 18499438,
    "name": "All at Sea",
    "cover": "http://p1.music.126.net/dvOdVCHIj92l9gvQJPOFeQ==/109951167598524133.jpg",
    "length": 197813,
    "artist": [
      {
        "name": "Richard Walters"
      }
    ],
    "album": "The Animal",
    "fee": 8,
    "url": ""
  },
  {
    "id": 407927304,
    "name": "月球下的人",
    "cover": "http://p1.music.126.net/JWWQaWDfb_zbDSxMFhj05Q==/16578436324241322.jpg",
    "length": 283906,
    "artist": [
      {
        "name": "李幸倪"
      }
    ],
    "album": "月球下的人",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154405/c5f2972a190f685488441d336f0953a0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29670173253/0472/4e51/6000/ee9111242b707ee0bada1a34eada6583.m4a?vuutv=sUu5/lgM+aSlwbByDdJMIojwMxKWCjQfPSyc9eI/eF2HxaIDMgRqUVpYgRV5I+5K/w2JPbO5EHzJ0vu356HsBLruDabYUZR1/lrB7fowCq8=&authSecret=0000019d711be0001a920aaf797a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1477860622,
    "name": "Stay (Acoustic)",
    "cover": "http://p2.music.126.net/jPImUiEmw9d9Hgtj8bYTfA==/109951165342925001.jpg",
    "length": 202226,
    "artist": [
      {
        "name": "Ghostly Kisses"
      }
    ],
    "album": "Stay (Acoustic)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154424/30e436a071460f930cc37916c36d615f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4158066093/ed81/9158/7861/370236f3f797fbbc87370e0237b6cd7f.m4a?vuutv=JEVOJ+xAitWxWh3wr1EzJMo3r4SwcPMqVlB85srAayV/sSniG2AhljkEfjFjraoZ4osugnMhWsT7uTc1ElByN4SVfAnBowrYLTZnEbyHItM=&authSecret=0000019d711c2ab1050c0a32658b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 108108,
    "name": "虎口脱险",
    "cover": "http://p1.music.126.net/ePksoOdhBGmubcl3iduStg==/109951167759919004.jpg",
    "length": 297946,
    "artist": [
      {
        "name": "老狼"
      }
    ],
    "album": "晴朗",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154503/43c0f6895b43961027e601f83481cf69/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18740902130/0664/bb87/9c32/d4c51aa63c821a72ea5fe4d1c52f81d3.m4a?vuutv=DXVq4nqkFTLnk1+0lL+tyTy8WvPN0wKCVwv5A+Ga1MDOS3WtaoBlznNtZH7KGZ+SWo40+obVNyAifxbRkO2kCcP2xaJWUYSO2MuCnXc9paA=&authSecret=0000019d711cc2e9086e0a32df960006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 82366,
    "name": "爱在",
    "cover": "http://p1.music.126.net/8fTdTkzJUc4jEcoiV5JNtw==/109951168870789373.jpg",
    "length": 243733,
    "artist": [
      {
        "name": "方大同"
      }
    ],
    "album": "未来",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154518/350a1546261d944e17ad9a75b9ec95e7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18718779122/9b8d/cb41/0e29/ebb61c24ffc25d492d4e10b3c3517c13.m4a?vuutv=6GlGUcnMMUIiqWqE9ofbN+hj+XQVkzbYUf13TADpyfoudSiE76UzDTDUpXQyx6SuXmVFeOdt0yLy+59eZGPpKz4LTsR745dYvUTq4+otXvg=&authSecret=0000019d711cfc2a0d2c0a3262760006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1909668621,
    "name": "无数与自我对话的深夜",
    "cover": "http://p2.music.126.net/mZWib1GiML12Cfaw1Kv15w==/109951166898347494.jpg",
    "length": 188736,
    "artist": [
      {
        "name": "什么都浪漫"
      }
    ],
    "album": "无数与自我对话的深夜",
    "fee": 8,
    "url": ""
  },
  {
    "id": 483041685,
    "name": "Midnight Blues",
    "cover": "http://p1.music.126.net/6XGLWcLFYaqs17f6LeWh5w==/109951165765397967.jpg",
    "length": 513360,
    "artist": [
      {
        "name": "Snowy White"
      }
    ],
    "album": "No Faith Required",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154528/bf206a8724d0fb570226c8b41ca92444/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7664965548/d1b0/7727/71f9/518482992e5b9052db5f496a03014b06.m4a?vuutv=FxPRVygFHHLLNsj0v12sTqY4Twe8sIyUE3gZO+buM5sIIiUA62K4akF7hEuTyo1JCmmpQf7/G3pa3DoPCz91s3kDd09xYf4ZtOmMmqe8Oms=&authSecret=0000019d711d258800480a325eab0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1491070906,
    "name": "Girl Like Me",
    "cover": "http://p2.music.126.net/oVl6LmWKdzR67SSPz4oEWg==/109951165424053101.jpg",
    "length": 210160,
    "artist": [
      {
        "name": "Cam"
      }
    ],
    "album": "The Otherside",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154540/68b1490e6fff1084c291d516ea418ba1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34268278969/2aaa/2651/07c3/963eb581423b58787b16f5cadeee4063.m4a?vuutv=y2GS0/HqY+k8I+MibcefgSH88PrEE3hpjwjRZT+76Rn8Dk6sqguqvfbDo2s/yMA9c28jDliqorcyYXqDHMSRqvLs9WB/cerw0ar/VV42s3s=&authSecret=0000019d711d51f217f20a3b2083097b&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2697656415,
    "name": "亲爱的你啊",
    "cover": "http://p2.music.126.net/s0D6UTU1YUtMcOCtwKHaRA==/109951170776174055.jpg",
    "length": 235750,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "亲爱的你啊",
    "fee": 8,
    "url": ""
  },
  {
    "id": 458496083,
    "name": "阿婆说",
    "cover": "http://p2.music.126.net/X12webjUcU41f7FY6BvZmQ==/18549860673982254.jpg",
    "length": 241333,
    "artist": [
      {
        "name": "暗杠"
      }
    ],
    "album": "阿婆说",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26387357,
    "name": "女人的秘密",
    "cover": "http://p1.music.126.net/QJYb5PP_YtSU8yeopkMnWg==/109951163077573267.jpg",
    "length": 280200,
    "artist": [
      {
        "name": "曾轶可"
      }
    ],
    "album": "会飞的贼",
    "fee": 8,
    "url": ""
  },
  {
    "id": 340391,
    "name": "还能孩子多久",
    "cover": "http://p1.music.126.net/u99fHXGn85d8TLjYbPVuUA==/109951163105662267.jpg",
    "length": 273040,
    "artist": [
      {
        "name": "曾轶可"
      }
    ],
    "album": "Forever Road",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2635125901,
    "name": "谁知爱是什么",
    "cover": "http://p1.music.126.net/dlsDdLopwJrE8JlWgWbaOA==/109951170031584299.jpg",
    "length": 182742,
    "artist": [
      {
        "name": "方大同"
      }
    ],
    "album": "梦想家 The Dreamer",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154602/aa161d6b1dd3ef39605ac46d284934df/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/55680829866/68b6/6ea7/c78c/358addc1ae3e7a2993668de6e0f2e9ef.m4a?vuutv=MIHCX2ZVbhp1BR5PxWqdKgvgoW/7FWrvDGPkRYfpWYgtKNJB0dXPrzjlS5EuEdR3TS13cFzlslASJcMpIGR5AldK2k8upSYww68dC9MWShA=&authSecret=0000019d711da9d7055b0a3290740006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28029112,
    "name": "三人游",
    "cover": "http://p2.music.126.net/-UEqoOLy2P4dWzH3WrBlbA==/109951167164989067.jpg",
    "length": 237426,
    "artist": [
      {
        "name": "方大同"
      }
    ],
    "album": "The Soulboy Collection",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154657/d68fb84dc9658fd2865d219e56dbaac1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34400366027/6535/fa14/32d3/c9c11b123f68e74eeba99add9fe2620f.m4a?vuutv=1We6ibLsQR9JUx5wkz4C7jbDmeU5YaMbZwJKAFbug6BlABe2gWUNLHGlElFGiHul8fuy5uh+neAHDA7JjIpy5n9jpikcwGXYZDK+mt28dGI=&authSecret=0000019d711e80780fb60a3b21be1c79&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 287724,
    "name": "相信",
    "cover": "http://p2.music.126.net/1HJILQwc62AfvcXkGgVJHQ==/109951165549820772.jpg",
    "length": 271693,
    "artist": [
      {
        "name": "孙燕姿"
      }
    ],
    "album": "我要的幸福",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154721/74b41565f10a33a966fc92f1c9e8a100/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18716336538/9b95/649d/2ad5/d061623f8d1cbef3e87ed2385d280cf2.m4a?vuutv=T4X6ZktjhoLAkioyYmvw4BTULJo86N3+K3uS/lNXc7mSCUxC1D29iceDYhe+J65cYdfoeE1Lxh+Ogwt17SHbf+a+7U90qriJ9S4t9HAT040=&authSecret=0000019d711ede3d00780a64cd160006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2065868022,
    "name": "Things You Said",
    "cover": "http://p2.music.126.net/Q9OkD_MsN63DXdP86fiB4w==/109951168753316527.jpg",
    "length": 234866,
    "artist": [
      {
        "name": "Cody Fry"
      },
      {
        "name": "Abby Cates"
      }
    ],
    "album": "Things You Said",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154737/9f1bceecc466a463badb628153b2ab5c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/30417277620/08b0/d38d/ee70/1ba9a304b211b2b737bb8345a86363b5.m4a?vuutv=YPFNWzL01GqyjPwNeh/HoB4dcCcPG9wQXdVRLTyErkrQG5XwFRV6/WC0mabdWgKckI1KxAdQFUI+JCMYFMiDggGOpVkgUrsxt/dw4QfU7ew=&authSecret=0000019d711f1a921edf0a64d20b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2635125903,
    "name": "回留",
    "cover": "http://p1.music.126.net/dlsDdLopwJrE8JlWgWbaOA==/109951170031584299.jpg",
    "length": 236343,
    "artist": [
      {
        "name": "方大同"
      }
    ],
    "album": "梦想家 The Dreamer",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154747/ad4be15669ee9c192acb0a0960074ed7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/55680841504/6d52/26d3/f9a7/e2e9bee07d0bd8dd97a7ae6022b04846.m4a?vuutv=gFLe9VPgD53hyfVHWy0BKtdA2dUooMWqzaK0xpoT201oHrLO3pJBpjEaojj2ofrVllQB6HyuQfvLxlv4QxMpGPMO2dnc06yB69cE2Nrj3D0=&authSecret=0000019d711f440817af0a3b23d3016e&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 499943147,
    "name": "礼物",
    "cover": "http://p2.music.126.net/0gRsdYR0ixDnbUO73DjcvA==/109951163004879466.jpg",
    "length": 254066,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Demo2016",
    "fee": 8,
    "url": ""
  },
  {
    "id": 406346046,
    "name": "Half The World Away",
    "cover": "http://p2.music.126.net/al1mx5gPQYqEoyaifA78bQ==/109951170622166250.jpg",
    "length": 198133,
    "artist": [
      {
        "name": "AURORA"
      }
    ],
    "album": "All My Demons Greeting Me As A Friend (Deluxe)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154800/d7c01bcfc8fccb5def517382e46b8d32/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/58794104790/2040/0779/4fe0/c7767af3b20291adb7355a5e80f523ac.m4a?vuutv=RdP8pQkG4JPLK3VaRoCXiP7yMkX3i4GMVGH8B1hfbkOmtZ3bQ+yYBzaSCsJAQkl2hSurE53YIaWdj5fBWse0GmqAg9xIgU6SYbEtp1ogFpk=&authSecret=0000019d711f75af1b510a3b20821207&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1960051777,
    "name": "Breaking Hearts",
    "cover": "http://p2.music.126.net/OkWhCeXmRmm6GGAzZk4yrw==/109951167602954427.jpg",
    "length": 166492,
    "artist": [
      {
        "name": "Sam Smith"
      }
    ],
    "album": "爱我与否",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154823/294e819c377afb5b46baf90dbc1077cc/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19670745064/d2ba/c20d/6e31/8a29323451b3f6dc36baa19b3841e7ff.m4a?vuutv=8oUVEWAfpmCLvpW+KCDyNEplr868nUk3NG9w4dOARui+PsBpzQdklpW0qUSvCn/3YzDtI9nu+gjH9jqMsqI40LEuInONtRCPnAGLvhk3Az8=&authSecret=0000019d711fd19d15970a64f01e0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2637730685,
    "name": "关于思念",
    "cover": "http://p1.music.126.net/edi-ZdbfKiyJvNjm7r_dgQ==/109951170054112906.jpg",
    "length": 214903,
    "artist": [
      {
        "name": "Max李玄"
      }
    ],
    "album": "关于思念",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2161595973,
    "name": "闹哄哄",
    "cover": "http://p2.music.126.net/kvLJTxdPruRHJzHWQU_FXA==/109951169638607277.jpg",
    "length": 246754,
    "artist": [
      {
        "name": "怪枝"
      }
    ],
    "album": "闹哄哄",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28757815,
    "name": "Death Defying Acts",
    "cover": "http://p1.music.126.net/V_vZtQmd99voh6GjBRVSVg==/6007731534621718.jpg",
    "length": 313656,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Angus & Julia Stone",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154839/d67b91b2e15e6f3e7b133f97cc68d04a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29334056962/049e/772c/4858/9e8d678fe820acaf511b656630020342.m4a?vuutv=wCUJ1tGcnhBQj1qzeZBQWmGDL18wihYkKIkC5eXBJj23zgBDS1clAPqfQrANeJMyZ+c3XNT0YmTXXA17sVM8+rV7Bjtv9kWXn4eOvJKy3P8=&authSecret=0000019d71200dd301b00a64af560006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2637203435,
    "name": "一个人生活",
    "cover": "http://p2.music.126.net/F5ZdSrueSiz8Va6PJxyjYw==/109951170049357913.jpg",
    "length": 221056,
    "artist": [
      {
        "name": "徐化文（四熹丸子）"
      }
    ],
    "album": "一个人生活",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1915248264,
    "name": "蝴蝶飞呀 + 红蜻蜓",
    "cover": "http://p2.music.126.net/8K6PNnj9TUmW4xZDPgCKww==/109951166982791338.jpg",
    "length": 213850,
    "artist": [
      {
        "name": "房东的猫"
      }
    ],
    "album": "我们的村晚2022",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2625929157,
    "name": "窗外小雨",
    "cover": "http://p2.music.126.net/8dctyJ_sfpm13IqBThDBuA==/109951169950782317.jpg",
    "length": 217833,
    "artist": [
      {
        "name": "徐化文（四熹丸子）"
      }
    ],
    "album": "窗外小雨",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2005953987,
    "name": "渺小者",
    "cover": "http://p1.music.126.net/vOXIJk3Bvax71Nrw_XfFDA==/109951168138624460.jpg",
    "length": 379000,
    "artist": [
      {
        "name": "金池"
      }
    ],
    "album": "我最温柔的希望",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409154852/0ff5fa042c1bdad532648f79b9d76d9d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/23135773492/f288/8ca4/5f11/7156f182a39e3df7510dc84114d54782.m4a?vuutv=qMD0yuV2uqrg7ly6gponRQQcT2HMwt+p9pmyKDr/TTFgk3uRetGLMbrLZ0rXMWkMFIAF6tWnQOrgEETIPxhgectINyVoHSdUnPyI9EZKNNI=&authSecret=0000019d71203f6216aa0a32b0a90006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 19468098,
    "name": "Rococo Zephyr",
    "cover": "http://p1.music.126.net/97mU-SZj90Pm-n2fWAypNA==/109951163371678611.jpg",
    "length": 342746,
    "artist": [
      {
        "name": "Bill Callahan"
      }
    ],
    "album": "Sometimes I Wish We Were an Eagle",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26142919,
    "name": "最爱",
    "cover": "http://p1.music.126.net/dIozYUYR1ix9FGcKGZTZqg==/2416726557873798.jpg",
    "length": 327000,
    "artist": [
      {
        "name": "杨宗纬"
      }
    ],
    "album": "我是歌手第一季 第12期",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409154905/01f040fc458adaa3d6fa0c6868b18fc3/jdyyaac/010c/035f/0153/6fd53be6bc456511689f69bb284a1d4d.m4a?vuutv=ivoBu4jG6qYJQ2WE+P7ROHBlHTCpIm4VMXzEEdB5Ty57vQWeog9GSeJRh9pHXja2N9LkxI/9JLlS56p03cT57mttxj4fvj0VLQUAINoDR88=&authSecret=0000019d7120731e09b90a64bfdb0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2626250855,
    "name": "你是我最喜欢的人类",
    "cover": "http://p2.music.126.net/EKzP2iLn1KHFB9-Nfrp0-w==/109951170098051017.jpg",
    "length": 224000,
    "artist": [
      {
        "name": "杨英格"
      },
      {
        "name": "魏如萱"
      },
      {
        "name": "DAYDREAM"
      }
    ],
    "album": "Bare Daydream",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2043350928,
    "name": "If A Tree Falls",
    "cover": "http://p1.music.126.net/7LGCyq7oyQB0zof7KzaGLA==/109951168577126073.jpg",
    "length": 181826,
    "artist": [
      {
        "name": "Sophie Rose"
      }
    ],
    "album": "If A Tree Falls",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1435854988,
    "name": "Autopilot",
    "cover": "http://p2.music.126.net/hRUtaBLLpvSDUKfZ61y0fw==/109951164855879393.jpg",
    "length": 178546,
    "artist": [
      {
        "name": "Egil Olsen"
      }
    ],
    "album": "Autopilot",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409161208/ac465c8764b9d64df9b2f7e0df1e8367/yyaac/obj/wonDkMOGw6XDiTHCmMOi/1993700274/8edc/d146/3af2/426fc3713fb3a5baa5e6d8917caed701.m4a?vuutv=mnrgF/s0C0u8Kkr76m3//Yf4QjJhMIThUPVin0yqihdCjc9KlWlzujH7FTvXIikng6LHLXMuJkHtnKLSWPqBFMIzlSSg5h2d/nQVqnEBWlc=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 5252279,
    "name": "诱惑的街",
    "cover": "http://p2.music.126.net/nf3Vm1TADSzhD4AJyzZBhA==/109951163376713931.jpg",
    "length": 330023,
    "artist": [
      {
        "name": "林忆莲"
      }
    ],
    "album": "超级星光Pk宝典2",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409161313/f707d8b4037647d3752ecd12e5cc584b/ymusic/010e/510f/070f/6daae05671fedf0bc9480e46e0c22bee.mp3?vuutv=MHWs3nQKOZDAX1uVXhh4I9s7urMxOGf84MVCZtGWO/WUxfeQDd0MqSf9HOZBtb1YeTmoJXIVSone8TNueP4qWXYlhx9k2TO8m/tcGjj/t4o=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2042834722,
    "name": "万一你是个好人",
    "cover": "http://p2.music.126.net/ouktBHuMcdYMxmoGZ50pjg==/109951168573147262.jpg",
    "length": 185357,
    "artist": [
      {
        "name": "林家谦"
      }
    ],
    "album": "万一你是个好人",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161329/6db66fa4d2e20a6324e1bbc760b87415/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/33240582640/0715/d730/34ea/f6923b067d90592843b46fc393d6c6b2.m4a?vuutv=y7rPPOX+QYeNUS6+M9N7RpiCS0zg7HB8rAf+KJUSyVgHPiOpLp9BP89hsLzyoR630kKONbJkVKYl7NV18vpA+3BuVd39xOyIJj6XZk2bKUM=&authSecret=0000019d7136c96700170aaf7d480006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 571340767,
    "name": "人妻的伪术",
    "cover": "http://p1.music.126.net/TkmQ2rkSxzqbu3_t_mU6ow==/109951163351492408.jpg",
    "length": 277758,
    "artist": [
      {
        "name": "谢安琪"
      }
    ],
    "album": "人妻的伪术",
    "fee": 8,
    "url": ""
  },
  {
    "id": 521749251,
    "name": "言不由衷",
    "cover": "http://p2.music.126.net/lb0uSEy4nd6eQMv7hCbN0Q==/109951171530550836.jpg",
    "length": 261240,
    "artist": [
      {
        "name": "徐佳莹"
      }
    ],
    "album": "心里学",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161340/a3f774c7b9a96b089c4bd6b54f5d7486/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28557755967/712b/20a3/dc71/a992112955db42771c4aeba973f6b266.m4a?vuutv=vABuEu4XWdw7ubAJMK4qRtjgheEvV0Nl+vLVDM6NXJVOqDhF/CE5Up7ivPKHPl4Oc8LaVL0laSloMl6Agh5j6wLmsA3qeJFDhDzW2oSJWDo=&authSecret=0000019d7136f75f17340a32d9020006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 470601454,
    "name": "If By Chance",
    "cover": "http://p2.music.126.net/5KOvR1YbUyDVLRthEaFamw==/109951165981458431.jpg",
    "length": 303653,
    "artist": [
      {
        "name": "Ruth B."
      }
    ],
    "album": "Safe Haven",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161354/e86f75fa03d7f8cea3a6300c4d3be25e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/60929905891/e78a/cd9c/0c6c/a84973e282455b24b5b5633f9aa2cf86.m4a?vuutv=tstYxJG0exsVJ0p2vo5EtevW9/4F/xpfHA+V7BURDSafIMQBYVqYo9OXmzUMoMd/0hUYd1Gu6vP29V6UC5fKw6/N0SyfCslVA5OOa063TkU=&authSecret=0000019d71372af108f10aaf79ca0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 27483202,
    "name": "任我行",
    "cover": "http://p1.music.126.net/1itDj9ETx-njdPKTuptrwQ==/19057835044482433.jpg",
    "length": 278640,
    "artist": [
      {
        "name": "陈奕迅"
      }
    ],
    "album": "The Key",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161405/4074f2e2aca44be6b93b5925ad8555d8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481833551/cf8a/8264/f367/4c591711b68188d297d9c71b508fe086.m4a?vuutv=PGXZZQbhVyt1JQVGQIp0msuBX8e4prl2Fk05ZaieKwyF+woF2qITISXZ8G1U1SSq5pK2c45pRDWnWVYvmbZotswI+tkR+62gO/qPFkDc8OY=&authSecret=0000019d713756a91e640a3b1b9121f1&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2600747720,
    "name": "你的世界",
    "cover": "http://p1.music.126.net/SzSEpUDQpiIJXOzAlVxMlQ==/109951169706733088.jpg",
    "length": 263470,
    "artist": [
      {
        "name": "林家谦"
      }
    ],
    "album": "ISFP",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161416/7757cd9d6ff88dd6b41f678d4838c84f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/44022408559/3397/f801/92b6/9ae8cadfb3366610bc84fe1d55d807b4.m4a?vuutv=g0fkgy7eO3QsgTHfuoqXc1ey2qmsVLKmHHLH+ww0WNI+Ieufv0i4wV7sX6CpKcP1eUZX/lXCMEizd3FVApRiisUT/IixNqITLnTTpY+LuBA=&authSecret=0000019d713783e713e70aaf60d50006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2132789169,
    "name": "Good Enough",
    "cover": "http://p2.music.126.net/cNJTepxmQoq349gRJlKNFQ==/109951169389202329.jpg",
    "length": 199426,
    "artist": [
      {
        "name": "Sasha Alex Sloan"
      }
    ],
    "album": "Me Again",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1936678201,
    "name": "Stockholmsvy",
    "cover": "http://p1.music.126.net/I2dOauzahm7sjVdWZRkdvg==/109951168086993583.jpg",
    "length": 161396,
    "artist": [
      {
        "name": "Hannes"
      },
      {
        "name": "Waterbaby"
      }
    ],
    "album": "Stockholmsvy",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161431/e701d3e9c9d36c2af5ffdacdc837b2c5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/13874460168/ac53/4454/29ff/f8678dc9b577c3352765444db7fece43.m4a?vuutv=saHns6lsyGhYW7cuOJYoPSijyB3ajF+h2o8gzAtagDS/jhYYjp3OCCFM7lXpR1ZB5KgRygD8HGMy+AsPdA4hFBEfT7nGdWc3Q/LtQf41eag=&authSecret=0000019d7137bcd712bd0a64e5d20007&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 256470,
    "name": "远走高飞",
    "cover": "http://p1.music.126.net/DfnBpCXPY-JgoRAJxLoolw==/109951171530798085.jpg",
    "length": 227000,
    "artist": [
      {
        "name": "林忆莲"
      }
    ],
    "album": "属于我的林忆莲",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2143596327,
    "name": "在加纳共和国离婚",
    "cover": "http://p2.music.126.net/JvgvEeFXBWx0kKlffWwfog==/109951169479312521.jpg",
    "length": 266088,
    "artist": [
      {
        "name": "孟慧圆"
      },
      {
        "name": "呆呆破"
      }
    ],
    "album": "在加纳共和国离婚",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161446/b2b3476e7576639f9a2210ea852ccc86/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/35071485521/7f48/21b7/2e23/d65bcae18963a4d36cfa0f8caacc5bf6.m4a?vuutv=yMFiVrHFvGY2nbGqDjym8UKFFZMaxqba3iepuHbqNGWfPoLSHSGNQjb59A1apkdGIqCRxh0Sd/nhQzMrhQVBMtijwxr/3bDu7YeupZzXarU=&authSecret=0000019d7137f5f110410a64a51a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 569200212,
    "name": "一荤一素",
    "cover": "http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg",
    "length": 281346,
    "artist": [
      {
        "name": "毛不易"
      }
    ],
    "album": "平凡的一天",
    "fee": 8,
    "url": ""
  },
  {
    "id": 108403,
    "name": "两个女孩",
    "cover": "http://p2.music.126.net/a1uV59DV8OJzn4OVXRlLPw==/109951163071276550.jpg",
    "length": 239071,
    "artist": [
      {
        "name": "莫文蔚"
      }
    ],
    "album": "爱情论",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161500/1bbc5fc927815be5f6f4708f4be34dbb/jdyyaac/060f/065d/550f/1e443333e817a11ddcc4bea1756b3efa.m4a?vuutv=YCvuKEWIa1ObHYLSOZyF8TUrqFc1kq8A5VNvCZ7QeQtuWaZ4P69HYYXxUb2XmSEHaYqSqZD2AFbo92aZ1y+IZTuATvPqBlft4fgWYCZm/lg=&authSecret=0000019d71382f150a1d0a3b236b10ec&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 31877648,
    "name": "长镜头 (Live)",
    "cover": "http://p2.music.126.net/btcyURN4b6L-sORW1UxbKg==/2910407279937382.jpg",
    "length": 278912,
    "artist": [
      {
        "name": "杨宗纬"
      }
    ],
    "album": "我是歌手 2015巅峰会",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161529/30520076954fde5b29b977c0858dc245/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482268852/6391/62e6/10f4/793968216affe779af178a7db5494f13.m4a?vuutv=zUPuboKxrIi9fmG34JERIPyoafPctD38koTF0lSdCtrnPJEo5esc20viEHDyd2mmgLH5Z03BzcT1Sr89HrgJiU6TNN69VK/bialCIzQLwhg=&authSecret=0000019d7138a07005360a64fbaa0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 256624,
    "name": "失踪",
    "cover": "http://p1.music.126.net/Tpkxzsv2OA_4NrFjaYP1qA==/109951163829570820.jpg",
    "length": 200666,
    "artist": [
      {
        "name": "林忆莲"
      }
    ],
    "album": "林忆莲's",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161540/140d01687b5703fbeccefb2ee6982012/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18752066714/559c/d320/d129/8ad17f916cc0f15811491f590621cb35.m4a?vuutv=NYZsME7QodeZyFqYJpjTGkivEV+cJ0SpjQrYulxiSHhE1SCf+9R8KJkylT3AP1yLIdMIoGRPg1nw1OpaA7Hhbo/2C+8ltibp0tZvEzx6bdU=&authSecret=0000019d7138c9c8148c0a3250540008&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1307509930,
    "name": "But He Loves Me",
    "cover": "http://p1.music.126.net/ygQASgQGdWrnUIUZWivE6g==/109951164598031371.jpg",
    "length": 221933,
    "artist": [
      {
        "name": "Macy Gray"
      }
    ],
    "album": "Ruby",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409161550/f5394429d348f05e2595e1bee908d7ba/yyaac/525b/0e0e/005b/e195b6f61a9dcbadad84711162454cfc.m4a?vuutv=TCO4nmwno7UUIODzeVHdHYPBb9G6fNh3tAGjtpXy/nM/BeZ5e9fl4sDIxCL7D28o3U+B/NSBz/1Adr4QDDQ+8PMtJmIRPn50Dm4TZJ73Snk=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2099317936,
    "name": "It's All Gone",
    "cover": "http://p1.music.126.net/APQOYXcwHUJ3BI1ttT1P3Q==/109951169052410840.jpg",
    "length": 287463,
    "artist": [
      {
        "name": "The Wanderer"
      }
    ],
    "album": "It's All Gone",
    "fee": 8,
    "url": ""
  },
  {
    "id": 306855,
    "name": "蘇州河 (慕容雪 - Mandarin Version)",
    "cover": "http://p2.music.126.net/Bz8Oa6pWnH_cLUsZ2cTMZw==/109951172271408112.jpg",
    "length": 240520,
    "artist": [
      {
        "name": "薛凯琪"
      }
    ],
    "album": "Read Me",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161602/c105aafff4b29b4a174356c52ac587b3/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18752888714/7839/d90e/d7ab/9bbf6af708128f48aaa90842101f29bd.m4a?vuutv=fntkyzeXIotVFfKiLJwf4Wuo19hB0wxdmFnFhRPDiVY/YlqHPVzJLZFwCtennWVL4PffC48ozueYUUwGwxCAusfpjSFus4xGQgb1UrOslv4=&authSecret=0000019d71391f46095b0aaf778d0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1350364644,
    "name": "和解",
    "cover": "http://p1.music.126.net/DCTHgNSrKPx8blqnIxHdpw==/109951165525111574.jpg",
    "length": 294656,
    "artist": [
      {
        "name": "陶峻汐"
      }
    ],
    "album": "无人问津",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2103689933,
    "name": "大儿歌",
    "cover": "http://p2.music.126.net/5qaQJZhKxKTarmf37SSXnQ==/109951169102132144.jpg",
    "length": 184632,
    "artist": [
      {
        "name": "任素汐"
      },
      {
        "name": "张弛"
      }
    ],
    "album": "大儿歌",
    "fee": 8,
    "url": ""
  },
  {
    "id": 25638368,
    "name": "蓝天",
    "cover": "http://p2.music.126.net/L_yLyZAC7z17EVNxfKovXQ==/888405395278456.jpg",
    "length": 192933,
    "artist": [
      {
        "name": "追星族"
      },
      {
        "name": "郭柯宇"
      }
    ],
    "album": "直到对的人来",
    "fee": 0,
    "url": ""
  },
  {
    "id": 521493357,
    "name": "No One Told Me Why",
    "cover": "http://p2.music.126.net/inyPdZPBmjuS2p5R2HRt_Q==/109951163073808926.jpg",
    "length": 250850,
    "artist": [
      {
        "name": "ALEPH"
      }
    ],
    "album": "레코드팜 컴필레이션 앨범",
    "fee": 0,
    "url": ""
  },
  {
    "id": 408055791,
    "name": "Beautiful Life",
    "cover": "http://p2.music.126.net/geLLNBTZDfKffsintP65dA==/109951172313417517.jpg",
    "length": 210233,
    "artist": [
      {
        "name": "Ding Ke"
      }
    ],
    "album": "Port of Call (Original Motion Picture Soundtrack)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161617/f4b69936caef8d50184e155399aef43f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/76592737920/8873/434f/6ab1/7c0e9702bdf7d08a056e91c355454dcb.m4a?vuutv=2pZVEwZYY3L7An5wGXfLmB6iqwbaxZ/AncYSXyWfK0SZmBR4oXZrtLlh6197fpPWUGou7dllabwCzokc5O2LqgFsgiZ40jLrsfjRyNQaAQE=&authSecret=0000019d71395a5c1b5b0a328e2e0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 25638375,
    "name": "直到对的人来",
    "cover": "http://p2.music.126.net/L_yLyZAC7z17EVNxfKovXQ==/888405395278456.jpg",
    "length": 260253,
    "artist": [
      {
        "name": "追星族"
      },
      {
        "name": "郭柯宇"
      }
    ],
    "album": "直到对的人来",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1908002466,
    "name": "好的 晚安",
    "cover": "http://p2.music.126.net/RebQ9DeJC6XIFOeIAnYMYg==/109951166870966855.jpg",
    "length": 248493,
    "artist": [
      {
        "name": "邓见超"
      }
    ],
    "album": "好的 晚安",
    "fee": 8,
    "url": ""
  },
  {
    "id": 437752105,
    "name": "你的拥抱",
    "cover": "http://p2.music.126.net/ySsqeQTdlX6DTLbCnLd2Vg==/17671350881980744.jpg",
    "length": 224064,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "三温暖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1413386945,
    "name": "Patience",
    "cover": "http://p2.music.126.net/Dqkj6WENyOHTYDsJkrIKmA==/109951164594549890.jpg",
    "length": 234413,
    "artist": [
      {
        "name": "Faye Meana"
      }
    ],
    "album": "Nothing's the Same",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409161632/010ebcf0f73ea42c8e727cb647e3af94/yyaac/0e5a/5158/025c/901c03c72df2056b20fc569b12a308be.m4a?vuutv=5CfRHxIc+/ybBWL0Z6/g8FPq5kdyTbefsCnzZ15NBZgwTjuSI3XkYnVseUenTF+TQV6MgupXTh4yGAISiTjXpmMd2IiZhdigD6IBWQPUyb0=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1913064744,
    "name": "Waiting for Love",
    "cover": "http://p2.music.126.net/CI4VRhga-6Wm7xvFpJguPg==/109951165706508059.jpg",
    "length": 332814,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "十七八九",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161643/4fd57c0b56c63740e78a08652466baa2/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12740791914/0d43/e347/618c/5a8ab4d91b7aed84933858af665bae6d.m4a?vuutv=LspdrEPpXnM/E1T+F0bcT8bIZbPO9NxMR3MwkhmbD1pf3sOVdpJsN4boibnR4/bFDTZo+B7OOjeLkKJ6dxEI3fFiIOkMJtM4vmc42T8HDYQ=&authSecret=0000019d7139bf49078e0a3b201a1797&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1413066323,
    "name": "人质",
    "cover": "http://p1.music.126.net/TvIRXvPpBdfdaXnnMpdTnQ==/109951164589135005.jpg",
    "length": 264120,
    "artist": [
      {
        "name": "李代沫"
      }
    ],
    "album": "為你轉身電影原聲帶 (Original Motion Picture Soundtrack)",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409161654/0ba7778a6e3096ec6fe3082023395121/yyaac/0658/510b/070f/126e4f6372faf5b647970e56b3f082c6.m4a?vuutv=Sm+B1XhlVqtZPJVaCwRdVPwvYLFCSnPfE7x/qM/HiJBdsvVtis92hUpK5zqAHBcMi+ZbYWaJHwPTa8Y9+uqlYBX9/Py1wzQn3wHf4GooS5I=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 79938,
    "name": "If",
    "cover": "http://p2.music.126.net/niuSQYKmtHcNp3UiSi_UpQ==/109951172952715730.jpg",
    "length": 151680,
    "artist": [
      {
        "name": "丁可"
      }
    ],
    "album": "Island",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1979975319,
    "name": "普通的夜 (Live)",
    "cover": "http://p2.music.126.net/WY7AFPp3kaTZ-kT2Wv04bg==/109951167859280160.jpg",
    "length": 256775,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "2022中国好声音 第6期",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161704/09e5c679d3a2d2b24b131206ba0adced/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18708153675/7eb7/4af0/f5bd/de46cee7d27c8c731342ba3f357db32d.m4a?vuutv=QnEttv07tM29A2UGj0LLsvIaW42o5H1VoFPdGf9f8a/OKEW9FcUURbRwigBtEo6/vVlhFCz8YAoe85HuSjYF/DSpQwIIOfSc6amJVBF4/kM=&authSecret=0000019d713a13fe01eb0a649d790006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1888631655,
    "name": "棉湖",
    "cover": "http://p2.music.126.net/Dai7XYXh0qsA-Eot91FujQ==/109951166540853684.jpg",
    "length": 258260,
    "artist": [
      {
        "name": "暗杠"
      }
    ],
    "album": "棉湖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 554391207,
    "name": "Night Song",
    "cover": "http://p2.music.126.net/bAFgmZRG2tZSHkk_5HK7_Q==/109951168505400800.jpg",
    "length": 198000,
    "artist": [
      {
        "name": "Niall Byrne"
      }
    ],
    "album": "Nightsongs",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161726/adddf425f32570e99180f340fd71921a/jdyyaac/0008/070c/0209/7bbc701adb0fb6aa6bf25c4794ec376a.m4a?vuutv=xd1q0cwfSKcJ2NJeQ3Ntjf8KQuo/dAd3j+3y74L1Zkd7z0vJ9ybZWAIdh9Lb68DfjQDXehxB3kY1v5YZgNmCBBB5A8UQ8+LJOPaSAcRZ5Xg=&authSecret=0000019d713a696813a10a3b200b102c&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 188647,
    "name": "她来听我的演唱会",
    "cover": "http://p2.music.126.net/evh6-XDUtpkhGz-hnS_1jw==/109951171993687237.jpg",
    "length": 291174,
    "artist": [
      {
        "name": "张学友"
      }
    ],
    "album": "友情歌",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161740/d880e14446a66f29cee49f1178a802d4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14379787324/0d64/0842/c10d/f6b9f978cc5524e0ec9c6e659d6dc4a0.m4a?vuutv=GxpvodBHE72lfgGI6Q0DERF/Dp9Rv3fSX1mprvWl1c+uBOml3xPMbOepDPLN11Yc1JU9zkCxaUfM37fsqFr4H4+2hNCNftms8Ri8e4wjYgQ=&authSecret=0000019d713a9f2113e20aaf74ed0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1878812258,
    "name": "Head In The Clouds",
    "cover": "http://p1.music.126.net/NQ6pIqUwA0NdRh6szqyQsQ==/109951166421319018.jpg",
    "length": 184559,
    "artist": [
      {
        "name": "Hayd"
      }
    ],
    "album": "Changes - EP",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161751/c037610b53ddc3dc270f2ae7027e0e5d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/27195926686/6ad0/4d00/74a8/cdab33a7820262d442f4d61fc7fd6d71.m4a?vuutv=CratxD5TYK7Q88HXTrQqbtX1sxAjLnck1JRIDUUhL6i6grcPBQtr3v6OhOwPvGiu/7xFB4Hj3RJ6NA+UWrdbUtNxPIR0zrQ6pgsHs/LNesg=&authSecret=0000019d713aca140bee0aaf794a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1979903221,
    "name": "Lost",
    "cover": "http://p2.music.126.net/7xZ1jhV05OyFdArZvcDhEg==/109951167858338215.jpg",
    "length": 181730,
    "artist": [
      {
        "name": "Hayd"
      }
    ],
    "album": "Lost",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161800/5c4e63d7684ffd7bfe9fece9915ce35d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18694536775/9fc4/99a6/0ec8/fd25e1ccecd738cb551bf2c67d539511.m4a?vuutv=50BX6SqBy7r4RAa5Mv2QIMrI+/U3H3N6nNs7pTptZtAMAfKR89eCM265VbOExEBwgmQzgpPPpkxy3YL9J+ScvqLMUMcTRvwBlBd9kxALf8A=&authSecret=0000019d713aeed719380a3b23cb15bf&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1918796077,
    "name": "Love You Still (abcdefu romantic version)",
    "cover": "http://p2.music.126.net/aSedxRzuXbvFNcp1ff2new==/109951167030739289.jpg",
    "length": 150173,
    "artist": [
      {
        "name": "Tyler Shaw"
      }
    ],
    "album": "Love You Still (abcdefu romantic version)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161810/362e1b8c91a19c0db051c17597c63dc1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32406656493/94b4/d33d/4c2f/1e6474ba797f2caa828671c6c379fea5.m4a?vuutv=llJKum0SoNAC4alx36bDAYU8FYOykYcd8dylQufvBQIm2wtSwoqvRyvQWn2jzm32EkHn7RoN6VU6w6JQyjTvI+H0hPgGXyFaM3ssJbhWn04=&authSecret=0000019d713b14731e8e0a3b1bc70cd9&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1838919030,
    "name": "王招君",
    "cover": "http://p2.music.126.net/d_AC9BDLrl98XyLDWrfbWg==/109951169311058334.jpg",
    "length": 255146,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "TA·说",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1898194086,
    "name": "他不懂",
    "cover": "http://p1.music.126.net/kYApE6ugBWDaTJTzuPxJvg==/109951166659350157.jpg",
    "length": 221207,
    "artist": [
      {
        "name": "郁可唯"
      }
    ],
    "album": "时光音乐会 第6期",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161838/f93c7374934ab70157729ffb08d92d94/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11805670739/e369/fc6d/45c5/b3b42d2e43155d6cbd38527e56c29824.m4a?vuutv=rqvonyPJh9L/03Bh4PztbDsWv4oi6l4Rk8XDn5Vd5kANxS+NV99C3CeuWxXtAdD7rztfS6+D2zEJUuMlckDXg1jww4SerHKMVKuzaLIGtIc=&authSecret=0000019d713b80730a570aaf62e50006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 17800984,
    "name": "Hushing",
    "cover": "http://p1.music.126.net/lZLaG5iDLZ_autIXRBHgFg==/17934134160919801.jpg",
    "length": 409887,
    "artist": [
      {
        "name": "From Your Balcony"
      }
    ],
    "album": "The leaver and the left",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28925525,
    "name": "Forget Me Forgotten",
    "cover": "http://p2.music.126.net/5ItUh1IWmwxr2XkMMU9txg==/109951164852519561.jpg",
    "length": 200666,
    "artist": [
      {
        "name": "Hollow Wood"
      }
    ],
    "album": "Seasons EP",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161849/9cbf73978800a9e1aee6abb8f48b48c7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8694771574/b5f1/1d9f/0ee4/0098295626f72f0f957f0ec055e19d7e.m4a?vuutv=Jsz9Pxg+5bJMPYsOLXoH4+gzvSC+BOJ2O787xpIE1uovheEPUvANhnMNB3WQihqpuiWwBSp0vNlad3CuMRFD1RmFYgWAmSNRpv1ks9wpLn4=&authSecret=0000019d713bad59176e0a328b010006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1473049710,
    "name": "House With No Mirrors",
    "cover": "http://p2.music.126.net/DbIEAGYQxbj1PeBWcR0D0g==/109951165258218594.jpg",
    "length": 227671,
    "artist": [
      {
        "name": "Sasha Alex Sloan"
      }
    ],
    "album": "House With No Mirrors",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161917/fc66a4a0ae66627c04b3e4b6decc6d1f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32104380643/5cf9/0383/23ec/d9abdcef154f474b8952cf7018816b0e.m4a?vuutv=+/8re5yKph3sFElHXwmMvcKFzCBie3ZJUnQedgTEYdklSSK5XA95jdUcmWa9jMbZqQpXl/yBbP3LVaPVyLV9yFwhorAoLCHrbGmYig+eZFs=&authSecret=0000019d713c189d0fa90a64d0fb0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 27598482,
    "name": "第三人称",
    "cover": "http://p2.music.126.net/7JA4-uZnHgMmGm0DKIqfAQ==/109951168489584680.jpg",
    "length": 269506,
    "artist": [
      {
        "name": "hush！"
      }
    ],
    "album": "X",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161934/37bfd10bdbc610bea93b04e270811f1f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8679145197/0e85/8557/2e6b/11314b4ee41270e68e0bd5d4a8e63d4f.m4a?vuutv=C+xxpVPnDl+PyMTwgYoPxA6qal7fRcc07FIF0yWDIPwYI58cXIn09mPx2isJtA/OsfsuuTFky9cF64krOEpgSVgFAjCdMaU81lotR3rlx8o=&authSecret=0000019d713c5d931a900aaf670f0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1305774797,
    "name": "Busy and Important",
    "cover": "http://p2.music.126.net/DkxnbFqv2xQ5AckviGE09A==/109951163527345870.jpg",
    "length": 163925,
    "artist": [
      {
        "name": "Tom Rosenthal"
      }
    ],
    "album": "Busy and Important",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409161946/f7ed76a29e21ff1041f679e799c7becc/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482169724/d9d3/0187/dbd2/afd64e220afcb17e00fe8bdcf939c62b.m4a?vuutv=K7Ri2ntIlQlPdlV15mId5UxE/iNVojwR3axqMuGJlTB3z2KlJulWK6ivqXosTcovZ8CxJnKxDpkYxIWct7qnBApKPuLwP8CdOzPWw+dpux8=&authSecret=0000019d713c8b8b19340a3b207f0be0&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28836060,
    "name": "風",
    "cover": "http://p1.music.126.net/WfxODD6hCW210yUs3MmU7g==/5965950092818102.jpg",
    "length": 218000,
    "artist": [
      {
        "name": "Priscilla Ahn"
      }
    ],
    "album": "プリシラ・アーン・ベスト",
    "fee": 0,
    "url": ""
  },
  {
    "id": 31517168,
    "name": "Words",
    "cover": "http://p2.music.126.net/cY1LmtdPUBuj-GwHVG-DKA==/109951167549528782.jpg",
    "length": 252232,
    "artist": [
      {
        "name": "Passenger"
      }
    ],
    "album": "Whispers II",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409161959/db194b920c1ae43a72a16f93f7821b54/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12012125911/ad9c/1007/4887/c7cb573e601dec5beb686b8a0f76ed61.m4a?vuutv=MoEiEKEhlyKAgGxQBpTyCTnco72Ff2gfKHrArA9EFjsIX5BY1vEGvLG9wj0OBDx2kq5aOYTzp2eHKUNcvPxsxYSMw7WAO2pfOSE5pDm/R6s=&authSecret=0000019d713cbfbc12010a64d7b50006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1447803278,
    "name": "Dawning of Spring",
    "cover": "http://p2.music.126.net/wwFpf0rR5Vie_5AofRsDzQ==/109951165932515768.jpg",
    "length": 257454,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Songs I Wrote in My Bedroom",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28953336,
    "name": "Days Like This",
    "cover": "http://p2.music.126.net/z8ynh1lJr0rnv6PJemTqPw==/109951163073379170.jpg",
    "length": 223500,
    "artist": [
      {
        "name": "Kim Taylor"
      }
    ],
    "album": "The Greatest Story",
    "fee": 8,
    "url": ""
  },
  {
    "id": 64116,
    "name": "Baby Song",
    "cover": "http://p1.music.126.net/Po0tJTtv4aBaYozWlnojHg==/18546562139313276.jpg",
    "length": 198506,
    "artist": [
      {
        "name": "陈奕迅"
      }
    ],
    "album": "？",
    "fee": 8,
    "url": ""
  },
  {
    "id": 521418666,
    "name": "Come A Long Way",
    "cover": "http://p2.music.126.net/tbxmmyrrV8xUt7CxvTAADA==/109951163077229685.jpg",
    "length": 275733,
    "artist": [
      {
        "name": "Kim Taylor"
      }
    ],
    "album": "I've Come A Long Way",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1464505526,
    "name": "Let's Fall in Love for the Night (1964)",
    "cover": "http://p2.music.126.net/mOddmPYMbdWkgiZBmVoW4A==/109951169157437471.jpg",
    "length": 240000,
    "artist": [
      {
        "name": "FINNEAS"
      }
    ],
    "album": "Blood Harmony (Deluxe)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1842025914,
    "name": "这世界那么多人",
    "cover": "http://p2.music.126.net/LOTxqRjFm03VJEOHJbUqMw==/109951165944804127.jpg",
    "length": 285884,
    "artist": [
      {
        "name": "莫文蔚"
      }
    ],
    "album": "这世界那么多人",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409162012/2a30cd24fefe81042030366a9a97af90/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32103482602/b102/1cd2/96bd/611696b087907ece18b76baccb233250.m4a?vuutv=Y04XZYLVlDv4VlRx6KSBUhnr4mJbLAoCrRhMip9wzHrs+n11aL9MUpfm2G3JxUFLKuHjrMrjPvy8YzRPUwTU4J32kkkyUYgIDxTA1A5i8rA=&authSecret=0000019d713cef1d01b10a64c3ce0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1302132211,
    "name": "Can’t Help Falling in Love",
    "cover": "http://p2.music.126.net/-cZwcb28FtqzE2J88sGQuQ==/109951163509183395.jpg",
    "length": 201933,
    "artist": [
      {
        "name": "Kina Grannis"
      }
    ],
    "album": "Crazy Rich Asians (Original Motion Picture Soundtrack)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409162023/d6cde46655675f68e70d18532230708f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14710171087/c0c0/54ca/ac97/0d6409128fa946d287160ec4939887c3.m4a?vuutv=oQKGIuDk1Al3UkId3ooQa4PZwC2zH9SXL9Bc1fuHrThZwDL/W+C66P8EyRCKC5ucKz/8+7DScUcIXr/5t2k5BX59Ab86R9f/J0JButXTLDE=&authSecret=0000019d713d1a360e6b0a3250810006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1861651696,
    "name": "老情歌",
    "cover": "http://p1.music.126.net/TRbI1Y9GMdiTlGpw65Odfg==/109951166353671371.jpg",
    "length": 233888,
    "artist": [
      {
        "name": "刘瑞琦"
      }
    ],
    "album": "以歌为名",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1417400412,
    "name": "同类（cover. 孙燕姿）",
    "cover": "http://p2.music.126.net/ZbqD15ZS_rLjSacYrDydbQ==/109951165528328220.jpg",
    "length": 275800,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Wishroom",
    "fee": 0,
    "url": ""
  },
  {
    "id": 433059340,
    "name": "好好",
    "cover": "http://p2.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 185086,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1864711242,
    "name": "星星对宇宙说",
    "cover": "http://p2.music.126.net/mmHzmpwsk8xbuaW5DoCABQ==/109951172387254024.jpg",
    "length": 285000,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "JG Universe",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1848233480,
    "name": "可惜啊",
    "cover": "http://p2.music.126.net/dOUGyF7KPliuner56Adp0Q==/109951166035751203.jpg",
    "length": 238052,
    "artist": [
      {
        "name": "范倪Liu"
      }
    ],
    "album": "可惜啊",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1848190450,
    "name": "银河与星斗",
    "cover": "http://p2.music.126.net/4fGSYK5S1SskrZjkyCJfJw==/109951166035185227.jpg",
    "length": 194814,
    "artist": [
      {
        "name": "yihuik苡慧"
      }
    ],
    "album": "银河与星斗",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409162040/11e4182f7932858f684d1e75aeea06d8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/16639072530/bb80/f8fa/bc57/078081f997ecba42d2730ff8886d1c1f.m4a?vuutv=I6J+Yn2cOYKe9qAJugP7VncoRT2DcOHhE9yYco6PFRrJOfNXKc9eMxegW7RSJddl+zwMhy6ex3vy60wKCzMGR78iuOWiv7Bl0Or6KDzCARA=&authSecret=0000019d713d5fab005e0a3b22291051&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1852002765,
    "name": "未发送",
    "cover": "http://p2.music.126.net/qN_OYfIEEqxW5ZY7b0fX5A==/109951166074176034.jpg",
    "length": 215466,
    "artist": [
      {
        "name": "阿冗"
      }
    ],
    "album": "未发送",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409162050/e5f4088599da920720f488ff8fba3379/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/9355326897/452d/1949/d4b5/e0556f8b5c59087832dd5aeaee2a5511.m4a?vuutv=m0N19ydjZGAnZzLtx9+rQYEyAxSy3F+Bv04BOsbX+uFFXlFAL4/vsSVjveZf0TEv/EP4OaD/LLkM/gcxZaHgFjre4wM4JHQKESV5cQnpzUY=&authSecret=0000019d713d8366074d0a3293d10006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 487115171,
    "name": "Let Me Be Your Love",
    "cover": "http://p2.music.126.net/NMxa8cdscpSR9Qkn0se2Ww==/109951162959155567.jpg",
    "length": 193253,
    "artist": [
      {
        "name": "GREX"
      }
    ],
    "album": "Acoustic Party",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1330625540,
    "name": "Sweet Memories (Cover) (Live Session)（翻自 松田聖子）",
    "cover": "http://p2.music.126.net/oK4id524OEHuFTrdxQnm6A==/109951163683778812.jpg",
    "length": 216810,
    "artist": [
      {
        "name": "Leo1Bee"
      }
    ],
    "album": "This Far 这么远 (Live at 13Club Beijing)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1413374583,
    "name": "一滴泪的时间 (R)",
    "cover": "http://p1.music.126.net/I1uOzWnXHJCBp2zF_-pqLQ==/109951164594518059.jpg",
    "length": 287765,
    "artist": [
      {
        "name": "赵紫骅"
      }
    ],
    "album": "一滴泪的时间 (R)",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409162110/96dd127e8334d0783a8b527c8fe38380/yyaac/560c/545b/5408/af9cf5c210c1eeb88d1fcb00f8e0ca85.m4a?vuutv=iJ+PtxEZ4JDqC8sb7AgZN3qTdQKtrr36UEXbFT0tgGiKb+aj2sKcJ+SgP3PljWGoD5hRo5ivcn7qLSLq5tjjRE0o3k3Qw1snB//8LU+x8Cw=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 5248060,
    "name": "达尔文",
    "cover": "http://p2.music.126.net/wbkrh_thnNRkWkXdFJHX_w==/40681930244552.jpg",
    "length": 265106,
    "artist": [
      {
        "name": "蔡健雅"
      }
    ],
    "album": "预见爱情",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1851907936,
    "name": "海马",
    "cover": "http://p2.music.126.net/rLr0nfHUqChmuth2ZSobDA==/109951166073533284.jpg",
    "length": 223832,
    "artist": [
      {
        "name": "曹于漫"
      }
    ],
    "album": "海马",
    "fee": 8,
    "url": ""
  },
  {
    "id": 287063,
    "name": "我怀念的",
    "cover": "http://p1.music.126.net/hIOFATG-3vNyYHOj31Tyew==/109951169829283327.jpg",
    "length": 289066,
    "artist": [
      {
        "name": "孙燕姿"
      }
    ],
    "album": "逆光",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409162125/674604d79111fca1a5f90970b40d078d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18210014652/8867/d080/d6f9/75ea1fdc7a91688252ae9719dcde0ab9.m4a?vuutv=aqAkxiKroyMPJ5Hz81MjSTN9MSwzkDwujzl16bgD3WdQF6jvLsWq+pPO+JYzaPrJ08X/2ppslC9omHS6pZcX9K3FByM9Y+LjyQ0eS164mco=&authSecret=0000019d713e0e9c0c070a32ecb80006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 286966,
    "name": "180度",
    "cover": "http://p2.music.126.net/I9O-KpO4bLC6LWOKYfJj4Q==/109951165992337446.jpg",
    "length": 303680,
    "artist": [
      {
        "name": "孙燕姿"
      }
    ],
    "album": "是时候",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409164954/a9cf62e20c27fa782eddf0d7d215a1fa/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19412672441/d1ae/efcf/8c5b/70a9b3f3721eecce76e3d6bb8b089f55.m4a?vuutv=WVTlFlvVetOvVV0UmHgiWyR0VFoHgz0pnqFkw7sFDkIehCNHZbF8Qa4v+6p7RjtgQykQ1OzlhTXWARn1K8Ocv6AYy2Fo4+8boWuw8n2mInY=&authSecret=0000019d7158217409ff0a64ba5b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 472050059,
    "name": "You're Gonna Live Forever in Me",
    "cover": "http://p1.music.126.net/bb8iuT2Cl_RabMhSu5hO-A==/109951165981168578.jpg",
    "length": 189320,
    "artist": [
      {
        "name": "John Mayer"
      }
    ],
    "album": "The Search for Everything",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409164954/a9cf62e20c27fa782eddf0d7d215a1fa/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19412672441/d1ae/efcf/8c5b/70a9b3f3721eecce76e3d6bb8b089f55.m4a?vuutv=WVTlFlvVetOvVV0UmHgiWyR0VFoHgz0pnqFkw7sFDkIehCNHZbF8Qa4v+6p7RjtgQykQ1OzlhTXWARn1K8Ocv6AYy2Fo4+8boWuw8n2mInY=&authSecret=0000019d7158217409ff0a64ba5b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 407435011,
    "name": "我想",
    "cover": "http://p2.music.126.net/O6d7GYY3gp2uy8zehvcOjQ==/17699938184267410.jpg",
    "length": 248125,
    "artist": [
      {
        "name": "余佳运"
      }
    ],
    "album": "幸福三部曲",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1845920151,
    "name": "Magazines",
    "cover": "http://p2.music.126.net/6XWTLa-dFDEv01NgDW213w==/109951165989126422.jpg",
    "length": 220049,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Magazines",
    "fee": 8,
    "url": ""
  },
  {
    "id": 483024223,
    "name": "Sleep Is a Rose",
    "cover": "http://p1.music.126.net/JAxiBb5xpQ4O0Cyn7yydmA==/109951165981648472.jpg",
    "length": 231706,
    "artist": [
      {
        "name": "RHODES"
      }
    ],
    "album": "Sleep Is a Rose",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165030/a7bfca36ddfcf10a6fefd025b01f9abd/jdyyaac/0458/550e/0e52/326469b3e3bd8567c15598ff180b30b6.m4a?vuutv=L49BfAyGBbwXBhw4Ihr0KfurLuP4b/Wyzasfndgnlt80gYOddruWihGwc+akgr6TzYIfg3srA9bgEXoauW4KEBsPwnp1vE+15uVlgq+TaSY=&authSecret=0000019d7158acf2177e0a3b211a1eab&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1500569811,
    "name": "阿拉斯加海湾",
    "cover": "http://p1.music.126.net/j9P19hOTNbYxLZDJB9bJag==/109951169385715334.jpg",
    "length": 241043,
    "artist": [
      {
        "name": "蓝心羽"
      }
    ],
    "album": "阿拉斯加海湾",
    "fee": 8,
    "url": ""
  },
  {
    "id": 464797752,
    "name": "Thirsty",
    "cover": "http://p2.music.126.net/aIjrZxgf9FJ_ieduZBlyew==/109951170436856346.jpg",
    "length": 207226,
    "artist": [
      {
        "name": "Geoffroy"
      },
      {
        "name": "Men I Trust"
      }
    ],
    "album": "Coastline",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165105/b5530b3c9c3cd6f78b3e2df2844fa5f7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/57936272018/f258/46ed/3e15/fe70a283393879c44f4d36633d2cbe9f.m4a?vuutv=tj17IfCecXKcKi1y17hQf5ClxnOiYJE4meQkVf2CeU8yDe2NwHfX/H8imXk1Ylwa3giS+rdSF+cbmF/A4oHx0NEM/E9xWqIXZDILwz7B9Sw=&authSecret=0000019d715937d705380aaf60360006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 294052,
    "name": "雪落下的声音",
    "cover": "http://p2.music.126.net/TduTLLgo8gp61mEyWcRdFw==/587139209244496.jpg",
    "length": 259346,
    "artist": [
      {
        "name": "谭维维"
      }
    ],
    "album": "耳界",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1825927405,
    "name": "Siri",
    "cover": "http://p2.music.126.net/2dqzwq-e3Fuy1LukZd3MXQ==/109951165789781180.jpg",
    "length": 223828,
    "artist": [
      {
        "name": "见青"
      },
      {
        "name": "南栖"
      }
    ],
    "album": "Siri",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1815618744,
    "name": "星空",
    "cover": "http://p2.music.126.net/pEE00V0v5_jb9overalgDw==/109951165671181717.jpg",
    "length": 192529,
    "artist": [
      {
        "name": "胥睿"
      }
    ],
    "album": "星空",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1413374550,
    "name": "一滴泪的时间 (L)",
    "cover": "http://p1.music.126.net/N0Ba2-7u8rQaD55y9VghlQ==/109951164594400176.jpg",
    "length": 269088,
    "artist": [
      {
        "name": "赵紫骅"
      }
    ],
    "album": "一滴泪的时间 (L)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165125/cc2ab347d26278497ca0b8566332d3cc/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096559666/084c/7131/94d7/54bc12dc9d0e9619bee273dc1ebfd435.m4a?vuutv=AgRksBXpIw5owC88I/+D6LnYENMAjTBFloq1vfr0VO5V4ktG7OCB5Q5rY+shSEYdQxK9BKGWQDESZRHvCbpvbAGgXTu/DP1YEvRuC8HR2Lk=&authSecret=0000019d715985910c420a3b1b7e1843&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1458255434,
    "name": "假装爱过",
    "cover": "http://p2.music.126.net/NP9XSxS9GrER7w43zGtXbQ==/109951165091931478.jpg",
    "length": 240000,
    "artist": [
      {
        "name": "卤蛋老师"
      }
    ],
    "album": "假装爱过",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1352585027,
    "name": "Not to Me",
    "cover": "http://p2.music.126.net/SIPusxU4uYDDTe0cT1S25A==/109951169066829280.jpg",
    "length": 213000,
    "artist": [
      {
        "name": "Make Major"
      }
    ],
    "album": "Empty",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165137/cd8f57917642717bfa55538c82d4c21e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/31621292243/b3ef/15d5/e334/8381fa763b5dcbd57d5b9ec42c1b3e3f.m4a?vuutv=YtX5XP6kEtAREpkwKeGlHRzuHmStiDOD1rhyoqvIQYM0IiXzpQk8Ow7PQHXF5U9/9Ac2tZ5XhVAN5GvvYiKq7DrpF5tGqIDlKYHspAAT1D8=&authSecret=0000019d7159b50f1e420a64e8d50006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1480280185,
    "name": "Holy",
    "cover": "http://p2.music.126.net/0O1DSaOFQDa0XAL1oxBDfg==/109951165325140747.jpg",
    "length": 212093,
    "artist": [
      {
        "name": "Justin Bieber"
      },
      {
        "name": "Chance the Rapper"
      }
    ],
    "album": "Holy",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165146/b689def134ce2fbfe2e1fa5994d879ed/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19643294341/fa29/3711/8c85/4b559c8a7435adaf4cacdeab65b02ddf.m4a?vuutv=tvY0sf5/okSq19cb7Wes1AYxt8pqhsVYaQvK6lq95L7AX41zGw8sW3KOQ7IQJfWGrgvDOaKSzzqkoYOQIG9N4IN2a8X9kdNzI1fuAvDeebI=&authSecret=0000019d7159d753120c0a3254090006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1366947193,
    "name": "别熬夜了",
    "cover": "http://p2.music.126.net/pa59NC1edofpJyHagCkArQ==/109951164091828628.jpg",
    "length": 175066,
    "artist": [
      {
        "name": "火晚晴"
      }
    ],
    "album": "别了吧",
    "fee": 0,
    "url": ""
  },
  {
    "id": 441622707,
    "name": "十一月的天气",
    "cover": "http://p2.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 264544,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1385911240,
    "name": "开小差（DEMO.）",
    "cover": "http://p1.music.126.net/rkWNHEMAhdVTWMcLDcAt-w==/109951164314097975.jpg",
    "length": 151320,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "开小差",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1293953203,
    "name": "Honesty",
    "cover": "http://p1.music.126.net/MaXWyVPVGR_KzBjqIyP_CA==/109951168680572992.jpg",
    "length": 189000,
    "artist": [
      {
        "name": "Pink Sweat$"
      }
    ],
    "album": "Honesty",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165159/a7e44b10504bf0a53a31b63b8f4bd4ea/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/17227685363/fd99/8f30/f054/b5b633fd0273f8bfd221bb510ae6a102.m4a?vuutv=6z4dhmxVVWWapfRTQeDCfHVCgAbpsGoLqEGu93iDb6eJA9dUcck8+1Lpvn+ZOser25//Fgqq19wkDkZgX/GHeclC+z/1WUz4/bIM8g1W18Q=&authSecret=0000019d715a094e19ab0a3b2378079f&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1806104827,
    "name": "有关于你",
    "cover": "http://p2.music.126.net/BQpLWmbD-3DN5YEflOO7qQ==/109951165557414221.jpg",
    "length": 189038,
    "artist": [
      {
        "name": "李学仕"
      }
    ],
    "album": "有关于你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1359548356,
    "name": "真的很怪荔",
    "cover": "http://p2.music.126.net/k6EzRdvLGqjlSF_ztpbpeQ==/109951164007334086.jpg",
    "length": 174000,
    "artist": [
      {
        "name": "大喜"
      }
    ],
    "album": "真的很怪荔",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1479706965,
    "name": "是你想成为的大人吗",
    "cover": "http://p1.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg",
    "length": 331530,
    "artist": [
      {
        "name": "尤长靖"
      }
    ],
    "album": "AZORAland·我是尤长靖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 5185403,
    "name": "Don't Explain",
    "cover": "http://p2.music.126.net/OPk5YlRq0MN2MXa1CRHFsw==/1782308348635191.jpg",
    "length": 356000,
    "artist": [
      {
        "name": "Angela McCluskey"
      }
    ],
    "album": "Blue Note:A Story of Jazz",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1301674258,
    "name": "Through and Through (Remix)",
    "cover": "http://p2.music.126.net/9B-CifcNKkFzDa4lBg1pBw==/109951167817268180.jpg",
    "length": 174315,
    "artist": [
      {
        "name": "khai dreams"
      },
      {
        "name": "Atwood"
      }
    ],
    "album": "Through and Through (Remix)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165214/d2708c11405f2588d75d9b38662421d8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/17918172060/b9b5/7746/57da/fe61be0e5ebaf5f462b3d66cf064242f.m4a?vuutv=NCDTyBYoacF0zYpvJ80ChbcQYiuoL3zYfWD+249CCmSF4bqqc4fB7zxvX+dgTkXrSnGlToS722QGNqdyRKfueOUvms66wuBruHy+eb7j5s0=&authSecret=0000019d715a46780ed60a329f3b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1416680616,
    "name": "昨夜你把星辰投进我梦里",
    "cover": "http://p2.music.126.net/RMTrr53G3Kcg8fpZ9S0LLQ==/109951164626313169.jpg",
    "length": 217166,
    "artist": [
      {
        "name": "漫乐酶"
      },
      {
        "name": "雷智皓"
      }
    ],
    "album": "昨夜你把星辰投进我梦里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1407252502,
    "name": "about you",
    "cover": "http://p2.music.126.net/xsd3kF7eGJ4lXRavzcXXMQ==/109951164659465750.jpg",
    "length": 127430,
    "artist": [
      {
        "name": "sadeyes"
      },
      {
        "name": "Powfu"
      }
    ],
    "album": "downpour",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165251/9e83def9c9297442cd82d296ad04f176/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4509967861/d523/3494/4162/c5b23e0f88e2a609d0985d55ed361600.m4a?vuutv=qYkZ5sHanVbyrPX/HMB2rGBgj6BgV6b4mKU14hxMLuO2AlOKtpgXepTaZm6z7AEjA2MNf2fmZxzPbD7usgBFTuIZQZwsWQhgAnCLRx9BjIk=&authSecret=0000019d715ad67918850a3b212a190c&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1438513357,
    "name": "释然",
    "cover": "http://p1.music.126.net/y500KRf2t3PQqu2uub-FCg==/109951164884381432.jpg",
    "length": 260693,
    "artist": [
      {
        "name": "陈麒名"
      }
    ],
    "album": "释然",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165301/77a4dca322a3f6dfdc260ea7b46b9f10/yyaac/obj/wonDkMOGw6XDiTHCmMOi/14054354756/a104/e322/ae24/18cc58303cb534655daf075b93b1d17d.m4a?vuutv=dRAKg9++zU6vIsd3JLiz4YqRdFG9rbSMovBVLCRwcH+HwvzvJjhYZ2CNoL9nQulZLJkwEi1Qg0CaZ4Yjuq44xrPPaCsYLMwDlY023IR1wBg=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 493276208,
    "name": "Simple Song",
    "cover": "http://p1.music.126.net/2aMoVDccfLIY1TfQG_cBiQ==/109951164936638095.jpg",
    "length": 228480,
    "artist": [
      {
        "name": "Passenger"
      }
    ],
    "album": "Simple Song",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165315/a354719eedd37274bef9fba613dae8d9/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482054213/0c82/a104/012a/3638653d6bf9d800c5fcc2cb61ab3e1d.m4a?vuutv=jNC4OQ4je1Co9dIrtInkITTjzh5IlPYU2VskND7GIf9WKHnW1+J1w8bDofikh8UZEfFAW0Y8hOsVzlJ1J0H12/EAO6pGykHLNQtpf1fSjoc=&authSecret=0000019d715b310b1ab20a3b22251808&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1413837038,
    "name": "Moonlight (Acoustic Version)",
    "cover": "http://p2.music.126.net/S4_9YRx5V7khdG3dcyfdRw==/109951164600006268.jpg",
    "length": 266363,
    "artist": [
      {
        "name": "Lilly Ahlberg"
      }
    ],
    "album": "Moonlight (Acoustic Version)",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165325/d1d0a206a5dfe9456067ad886c9bffe1/yyaac/010e/050c/015b/6d75e7fdb42f7e0e5f9561d121821c44.m4a?vuutv=uwg/OzQE5Ib4/Lh/ZNsMp3cIKhVLA1kHE0XXNIH3SQdkvr84VGzPhXAJZfVix8mPCJ8HY/7hYZgzdgq3iEQsON6F0mVSXKh9eS8Envk3iyY=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1450083773,
    "name": "在你身边就失去超能力",
    "cover": "http://p2.music.126.net/wgbIfO1ikWNYPac8fSgw3g==/109951165007824405.jpg",
    "length": 211898,
    "artist": [
      {
        "name": "刘思鉴"
      }
    ],
    "album": "在你身边就失去超能力",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1406858225,
    "name": "磁场电化学（feat.BlackC）",
    "cover": "http://p2.music.126.net/tft20w2FXardxuW1IRnv5Q==/109951164519846484.jpg",
    "length": 238666,
    "artist": [
      {
        "name": "RUNCII"
      },
      {
        "name": "BlackC"
      }
    ],
    "album": "磁 场 电 化 学",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1396473172,
    "name": "I Can't Sleep (Acoustic Version)",
    "cover": "http://p1.music.126.net/iv-GE5cZA5AGWFLXUcrd0Q==/109951167896029253.jpg",
    "length": 183164,
    "artist": [
      {
        "name": "Olivera"
      }
    ],
    "album": "I Can't Sleep (Acoustic Version)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1433285800,
    "name": "no im not",
    "cover": "http://p1.music.126.net/K4fJ233R_MWrij5BRR44EQ==/109951164831152173.jpg",
    "length": 237068,
    "artist": [
      {
        "name": "."
      },
      {
        "name": "青KonA."
      },
      {
        "name": "ZheN"
      }
    ],
    "album": "no im not",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165342/37cee03383c0e6eda60238abb0129309/yyaac/obj/wonDkMOGw6XDiTHCmMOi/1801271158/6c9e/cc02/b10b/62f42f105846b2e23b3a9c9048b998e7.m4a?vuutv=D0PkIuAXbDQDgqLa9JLhOiODUxmapJ4SCfzqkvpLMJWirVPThi5uAeAFUQwabUfFwb6YqrZhDmtHa4MH03hPVhcztdc32XopMPIwEiR6VEs=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 3884440,
    "name": "Take You Away",
    "cover": "http://p1.music.126.net/qlod1aSKsIPAIf2w1jnnzQ==/1719636185848724.jpg",
    "length": 228640,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Memories of an Old Friend",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1488403784,
    "name": "别说不堪",
    "cover": "http://p1.music.126.net/EEa9dua9dTPw68Aabag9xA==/109951165401945555.jpg",
    "length": 197392,
    "artist": [
      {
        "name": "程安"
      }
    ],
    "album": "别说不堪",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1368754724,
    "name": "从没去过巴塞隆纳",
    "cover": "http://p2.music.126.net/awJUvRnQYOjyoUJbzfL-Ig==/109951172190059964.jpg",
    "length": 273597,
    "artist": [
      {
        "name": "告五人"
      }
    ],
    "album": "我肯定在几百年前就说过爱你",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165358/ca03e2c9103285a62b19cd37d708bbc1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/63463317390/0463/165f/d5ab/35977bfb420e71aefd8c39ec0d2290ac.m4a?vuutv=cviroUBUk25xijgsbu+HYcnVon7jkL0O7YRazmffl4PlTMRZyDg58hwL+j1ZM/xcWrlTeaZxQf0HLH16Dcdq3OAnjbSIAT0BwbP302EnobQ=&authSecret=0000019d715bda2304c60a64a6450006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1492319441,
    "name": "自洽",
    "cover": "http://p2.music.126.net/ilhSwYuf1t3_vVu5eU5Pnw==/109951165434590354.jpg",
    "length": 268102,
    "artist": [
      {
        "name": "莫文蔚"
      },
      {
        "name": "郭一凡"
      }
    ],
    "album": "不完美人生指南",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29777652,
    "name": "恋恋风尘 (Demo)",
    "cover": "http://p2.music.126.net/8K2_o5NsmBL_D_m7F3QdXg==/109951163451647857.jpg",
    "length": 257786,
    "artist": [
      {
        "name": "程璧"
      }
    ],
    "album": "恋恋风尘 (Demo)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1453325909,
    "name": "双鱼玉佩",
    "cover": "http://p2.music.126.net/dkPXtNtGH8UZnxPomwHAcA==/109951168853136339.jpg",
    "length": 205000,
    "artist": [
      {
        "name": "Ice Paper"
      }
    ],
    "album": "寒木居士",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165408/cdeeb3e940f1c3947c98a5eacf089e0e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28557101802/841a/2e15/ccca/c9787db519becdf38a261c2ab40c6225.m4a?vuutv=+Qv+yik1sr3qm8KaIok/6SXh3pGA/tFeCUP1W2ji86uD2ISoRiQVnMAFBsqT82grEhFpvXDDdhrnnEgh64vITgb7d/tHrYBVWkgMuao2Smo=&authSecret=0000019d715c03d301f50aaf6f9c0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2057291,
    "name": "I'm Not OK",
    "cover": "http://p2.music.126.net/7n9sU8IYbYKJLx2M2bKG6Q==/1692148395148846.jpg",
    "length": 240349,
    "artist": [
      {
        "name": "Trent Dabbs"
      }
    ],
    "album": "Future Like Snow",
    "fee": 8,
    "url": ""
  },
  {
    "id": 573581361,
    "name": "我的蒙娜丽莎",
    "cover": "http://p1.music.126.net/R_gFfTD39ZBRKa4wzMdbwg==/109951163366984006.jpg",
    "length": 193186,
    "artist": [
      {
        "name": "旅行团乐队"
      }
    ],
    "album": "感+",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165418/2776294e070ff01d19f95c84f811cbaa/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482087662/ade0/00ce/268e/6289d813303813bd1416cd5f83b19d43.m4a?vuutv=aFuzFY8d17UKiIW3vfatc2gs9Ia3witEGZrAch76sBoATXcEGz+xw7D4INfTPyY+vzUrrvvqXAskG8YFrJtmHZnNSNqf7x+OcsQ9UbwvHHg=&authSecret=0000019d715c2a1d10ba0aaf77700006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1486513711,
    "name": "掩于岁月的温柔",
    "cover": "http://p2.music.126.net/IZfgpqqQkFrTm-cswite1Q==/109951165480678382.jpg",
    "length": 219318,
    "artist": [
      {
        "name": "李代沫"
      }
    ],
    "album": "不完整的故事",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165427/f425afd373a7135038baf69b9dd37238/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4387353622/959d/a37a/08c5/4dcc204b4118c3908bfcdde7d4a69f7f.m4a?vuutv=8UtHoNv85qLG4JVBCjMNc8bnSTXcRPz/uz/DrhxuxriwsFFiTqs4RQDWcicHzDMeRiH1vaIgqSvxSf2w68CKQyNdJ97SBTT5URaqG3ZDUcs=&authSecret=0000019d715c4d6d065b0a649d110006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 459860065,
    "name": "Heartlines (Acoustic)",
    "cover": "http://p2.music.126.net/GkyW7E3hrTf3ReKSFG_kUw==/730075731104325.jpg",
    "length": 225135,
    "artist": [
      {
        "name": "BROODS"
      }
    ],
    "album": "Heartlines (Acoustic)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1460682363,
    "name": "爱，存在",
    "cover": "http://p1.music.126.net/yZipSHp6XCUqy9l2VybCTQ==/109951165115661793.jpg",
    "length": 282807,
    "artist": [
      {
        "name": "卢卢快闭嘴"
      }
    ],
    "album": "爱，存在",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1434235495,
    "name": "Where The Shadow Ends (Acoustic)",
    "cover": "http://p2.music.126.net/h6hnkKAOyElwYBBD0rGbtw==/109951164843066072.jpg",
    "length": 244833,
    "artist": [
      {
        "name": "BANNERS"
      }
    ],
    "album": "Where The Shadow Ends (Acoustic)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1422556164,
    "name": "Used To Love (Acoustic Version)",
    "cover": "http://p2.music.126.net/vIT4aeX3EzRtMWXNYEtYVQ==/109951164703727755.jpg",
    "length": 211371,
    "artist": [
      {
        "name": "Martin Garrix"
      },
      {
        "name": "Dean Lewis"
      }
    ],
    "album": "Used To Love (Acoustic Version)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165443/ab25fd5dc3cb11daac215af489496d17/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32854347614/957f/4551/2369/45aabc4557bef8a5be420aa23d7f61ef.m4a?vuutv=1fDYBsaKGhcjFNkZgc/MPi0ppJnxF6XQy6hDQFDZxQcQIcRMYo45r/dV5nPNsrEWemRd5QyaTY7/XaptSeAYEhsTgZ5b69QTsu33Eh/p/bM=&authSecret=0000019d715c8bc40e960a3b22d51707&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1352884452,
    "name": "光·白",
    "cover": "http://p2.music.126.net/anfeoZ1C_usSz8Y-OBZi5A==/109951164175360059.jpg",
    "length": 290730,
    "artist": [
      {
        "name": "柳爽"
      }
    ],
    "album": "如影",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1418131335,
    "name": "岛屿",
    "cover": "http://p2.music.126.net/5QqPaUiTnTVxB5dZxDX3_Q==/109951165266634946.jpg",
    "length": 302640,
    "artist": [
      {
        "name": "棱镜乐队"
      }
    ],
    "album": "石头想有糖的温度",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1437154102,
    "name": "Lonely Star",
    "cover": "http://p2.music.126.net/i1R6K-SVQdNXgfANLks7yw==/109951165090257278.jpg",
    "length": 237386,
    "artist": [
      {
        "name": "Oh Wonder"
      }
    ],
    "album": "Home Tapes",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1470994279,
    "name": "拿手的玩笑",
    "cover": "http://p2.music.126.net/EeCVV021MY7ZYWgKTbM2-A==/109951165351836969.jpg",
    "length": 250259,
    "artist": [
      {
        "name": "刘思涵"
      }
    ],
    "album": "爱，未满",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165455/1761f1e7d2c5b4538ac1dbace1ee25c0/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3623054995/3263/5eff/9799/55a6808e540a4d675d77722eb8393bd6.m4a?vuutv=w4twiwrBynPhtshrsHf3adZ9OfMjVlxR+1ncmE7O9a4ev0T9Gwi3h+u2cIIT46kYRI5KOQytewzCZcOTsDDHkplNkJhhpsxfnt0/fV9qeNc=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1397319874,
    "name": "Too Sad To Cry",
    "cover": "http://p2.music.126.net/sKdAcnXK13mNR5RqkNB9Kw==/109951164430974193.jpg",
    "length": 209049,
    "artist": [
      {
        "name": "Sasha Alex Sloan"
      }
    ],
    "album": "Self Portrait",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165504/8f345cf56f981b835cfb7bd4e49bad1d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32069011492/a09a/61da/bae8/8e9bddfb3dabf09862ae44c402e94132.m4a?vuutv=T1n2sJ7WrWBpiWhRyc5rPML7lD/a8vFq+CYdSBKcShUmJLB+RgzHlyurzDNrBxx34aCkXZAFhObvtZdMObwWBWUjz78V1NlsgiFPIjRenLA=&authSecret=0000019d715cdcfb1be70a327af60006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1402845090,
    "name": "Broken",
    "cover": "http://p2.music.126.net/bmykR63JLH2v9bQkjxAROA==/109951171906135916.jpg",
    "length": 305675,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Broken",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165515/35b35cc8eb0815669571ee41c5f6e8b7/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2505977587/e74b/824c/7186/8eb48cfab175279d874e1341e426302c.m4a?vuutv=6GRs6QUTcUN3YTf5t449ElGHNCl1A5Oo0KW6bns3u83KiLpp5QMQbFfpJaNC4AJ1i3W8UguBiZP6yWA6+xbL1mWSPBkqx4TDz0sCcg3tfTU=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1447803268,
    "name": "Don't Forget to Breathe",
    "cover": "http://p2.music.126.net/wwFpf0rR5Vie_5AofRsDzQ==/109951165932515768.jpg",
    "length": 123390,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Songs I Wrote in My Bedroom",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1440687084,
    "name": "Hindenburg Lover",
    "cover": "http://p1.music.126.net/wwFpf0rR5Vie_5AofRsDzQ==/109951165932515768.jpg",
    "length": 302894,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Songs I Wrote in My Bedroom",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165525/1beeadee7c8c947d8908892923d21f0e/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19668460152/573a/2ec5/ac2e/422905307fcf06c9758b3e6a5a07613c.m4a?vuutv=GQxSMFDSI9bermDGcT15uEtXTLWMRlxYtxb7Pd3hhoYrSBOtDPa7CykFFx8VTCobbKeuJW0S+o+pTD8IY1Sb4MrL5aRewBqIYqjn9LyYmjc=&authSecret=0000019d715d2e560fb10a6499cc0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1317494331,
    "name": "1 to 2",
    "cover": "http://p2.music.126.net/sqSLt6_iSkefXLsFKx0kcw==/109951169727681670.jpg",
    "length": 218018,
    "artist": [
      {
        "name": "Elaine"
      }
    ],
    "album": "1",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165534/5d09f54dbf9112bd2761223636f653d7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/44159380352/4430/ea97/d841/c4b084ce3d50472b3d06528830f10cb5.m4a?vuutv=YF5lU8RzK3/9LXJgC3uKFpTCKtgwzBuGEC0eBRnd4k2BOkhnfBnvwoblrcpRlai6gaVlWEwWSB4pkJjt5nvkMVsAXwCbsODncdT7KV0UCrg=&authSecret=0000019d715d53af031e0aaf7b950006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 498704160,
    "name": "Melody X",
    "cover": "http://p2.music.126.net/EvfwsMqD9_1NOC3ROh2eWA==/17773605463424060.jpg",
    "length": 244346,
    "artist": [
      {
        "name": "Bonaparte"
      }
    ],
    "album": "Melody X",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165544/42c4ecb9ec1cf6ec35db4204c0423a48/ymusic/874c/3e21/05dd/1228b92f017f2fa685fc429028d0cea8.mp3?vuutv=Jh51F3bZUeyg4/0sTee8mqQY22ezyIgGs5uE+tXQozHyA9BujoS34LDYWEcpAPqZHaUvsSEDK9hMKShG/V8A+uERiupDTNuDxKC+fQg6zLc=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1404531626,
    "name": "窃笑",
    "cover": "http://p2.music.126.net/URW2jcwPJzKagqtR1CFqpw==/109951164496670550.jpg",
    "length": 222266,
    "artist": [
      {
        "name": "魏如萱"
      }
    ],
    "album": "藏着并不等于遗忘",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165558/3c2bc4294661058c32fe6b83f3b70dcd/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32569928278/0a35/b2ca/1486/66a6176999800dfccf031588b4df595e.m4a?vuutv=4Pz9T88PTCwJyXQ5IpAHdkp5pN0REdyyey7xulOc9wX2nxy/aEuNwzrY/qc6BhDor0Cu8EN5/hYzY5vbaXilg2aXj+ytKcCaldCv2Rq/Yj4=&authSecret=0000019d715daf8a02290aaf7fd80006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 411349945,
    "name": "Can't Help Falling in Love",
    "cover": "http://p2.music.126.net/Hg9SUoSNUdhf-Khu_8Gw7Q==/109951163322263694.jpg",
    "length": 173174,
    "artist": [
      {
        "name": "Haley Reinhart"
      }
    ],
    "album": "Better",
    "fee": 0,
    "url": ""
  },
  {
    "id": 27846868,
    "name": "Almost Lover",
    "cover": "http://p1.music.126.net/315nkTT6DJo_V8ibwvtuLg==/18317863719015086.jpg",
    "length": 262570,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Bundle of Tantrums",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1336864660,
    "name": "fly",
    "cover": "http://p2.music.126.net/XaOsJxPi5p-Rikyn7f3EOA==/109951163825156203.jpg",
    "length": 98037,
    "artist": [
      {
        "name": "vietra"
      }
    ],
    "album": "fly",
    "fee": 8,
    "url": ""
  },
  {
    "id": 482395086,
    "name": "Places We Won't Walk",
    "cover": "http://p2.music.126.net/YYuVRxqTb0hqWvsh6vgqvA==/109951163254082752.jpg",
    "length": 169410,
    "artist": [
      {
        "name": "Bruno Major"
      }
    ],
    "album": "Places We Won't Walk",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1403435714,
    "name": "everything i wanted",
    "cover": "http://p1.music.126.net/MsDJyNBSzrU9INfOLN8-2A==/109951164487035684.jpg",
    "length": 245309,
    "artist": [
      {
        "name": "Billie Eilish"
      }
    ],
    "album": "everything i wanted",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165611/3ffc7f36fd4d61d2d2ee4bd2903196d9/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3788416173/dbf2/3951/b721/73b7b35ecfb7bf0f6ed365f0725c642c.m4a?vuutv=uLpQQ4pUyoP4Kdd8WQP9YFfh9YdQuoJTdTOCNf7ypa2tGGYpSBDRiD7Lg32ridQ/b5mMsCZTYDrtGCWFsUQ5xd91E2C/lwXvSoY2dBLGL70=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1299570089,
    "name": "Umbrella (Electus Remix)",
    "cover": "http://p2.music.126.net/6qgcbIzCealR-aPf8ingGw==/109951163446379253.jpg",
    "length": 249242,
    "artist": [
      {
        "name": "Electus"
      },
      {
        "name": "Ember Island"
      }
    ],
    "album": "Umbrella (Electus Remix)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 479979756,
    "name": "Time",
    "cover": "http://p2.music.126.net/atFhY6cVqdcrqUF6YNbB2Q==/109951163371223791.jpg",
    "length": 244709,
    "artist": [
      {
        "name": "Tom Adams"
      }
    ],
    "album": "Silence",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1371121803,
    "name": "Trying My Best",
    "cover": "http://p2.music.126.net/MjfY6F0H6TvG9isgEwnS4Q==/109951164139884247.jpg",
    "length": 292336,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Trying My Best",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2117228,
    "name": "Chasing Pavements",
    "cover": "http://p1.music.126.net/Bb1iwz9qsACW7t7IYgCe7Q==/109951167841994941.jpg",
    "length": 211173,
    "artist": [
      {
        "name": "Adele"
      }
    ],
    "album": "Chasing Pavements",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1336864848,
    "name": "Season of Gold",
    "cover": "http://p2.music.126.net/6fRqz5DjxU-ATMycaa9UsQ==/109951169028571930.jpg",
    "length": 182833,
    "artist": [
      {
        "name": "Narrow Skies"
      }
    ],
    "album": "Season of Gold",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165624/8075ac192ecbc59a236e1b2e5318da2a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/31283516000/44f3/6a04/f307/f2f19d78d79d4d8f4941f0c76015cdf4.m4a?vuutv=khvlUJbBbcq7WuD7a1pj6PYp5a0uSDex1P4OBdr+TiepzFm86ogHpcWXea/SOqMpPToQJKSECNZW95S96PPvmZU7+WoPJfksoVcx0InBxLQ=&authSecret=0000019d715e14e51a2f0a64bdd10006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 18538037,
    "name": "Cry No More",
    "cover": "http://p2.music.126.net/KN2PgFL94_Y2P7Ir6vyVPg==/109951166466613172.jpg",
    "length": 258480,
    "artist": [
      {
        "name": "Robin Thicke"
      }
    ],
    "album": "Something Else",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165634/0a198f1645774b05d4088adae631b750/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3037600662/5d5c/8b7d/976b/24c1c0a479c000060c07bca77a1dfbac.m4a?vuutv=E3EAKUOEh/t/+7790G+ZWC/F3KM1w7h0JiNXpjlpMipXLmX8P/i6tYyspJf7TEf9YvbT1yOOwQF0Gnf3s6NRcMMeUA2yR1UegJVm2dNIKFQ=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1413142894,
    "name": "大眠 (完整版)",
    "cover": "http://p1.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg",
    "length": 184942,
    "artist": [
      {
        "name": "小乐哥（王唯乐）"
      }
    ],
    "album": "大眠 (完整版)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19934757,
    "name": "Felicity",
    "cover": "http://p2.music.126.net/Sr0TIlk6ZRKYmiv00beGXA==/109951163935983939.jpg",
    "length": 230600,
    "artist": [
      {
        "name": "Isaac Shepard"
      }
    ],
    "album": "Deep Joy",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165711/f34c047ccef4cc5ecacbc1cbe4e9ff86/ymusic/0f5c/0759/555e/861929650a03c2ff83fcb4dcfc2873dc.mp3?vuutv=z0+S4NNG1VhvTWCI2zHgkW1exWuRAACJm3tgqWxe4doO/PucltDgrc9KmOsV8ZZU/3Gl2Pl2NyTgpdNTUvCRSCRAW8nwbe7Zf2wk6KYFXkM=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1431995953,
    "name": "Chandelier",
    "cover": "http://p2.music.126.net/UwdPrpbBL3RBqLQFAP_vVg==/109951165016368231.jpg",
    "length": 313520,
    "artist": [
      {
        "name": "Damien Rice"
      }
    ],
    "album": "Chandelier",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3716423,
    "name": "Conversation",
    "cover": "http://p1.music.126.net/CVql0IFwCz8wbZoI48GeeA==/109951164828698262.jpg",
    "length": 212853,
    "artist": [
      {
        "name": "The Silent League"
      }
    ],
    "album": "The Orchestra, Sadly, Has Refused",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409165723/44300b9f6b3596456b28635582a9f17b/yyaac/obj/wonDkMOGw6XDiTHCmMOi/13398457204/585b/1408/7134/c2cc63921a48f6138804883ed36c4eff.m4a?vuutv=jHTYvvDHX+tzO/jd/ClCbU3ZDVhm3dAXfo4oaz7lSu/GiPUEWA68QOXGmNKiGMJMkLetMZb04wmNOHSdD+1oDArf3BkIVJQlgUcg8OGisX0=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 17982528,
    "name": "Blind Tom",
    "cover": "http://p1.music.126.net/V3W9A4DvhR2FK4YvDgEzUg==/109951163361016654.jpg",
    "length": 177293,
    "artist": [
      {
        "name": "Grant-Lee Phillips"
      }
    ],
    "album": "Little Moon",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165732/f0f9b239caf27922458f609615062628/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482085906/a458/2f43/ddb4/90a8bb99c0afcec5bbc9bc44c2b5a67c.m4a?vuutv=u3B445ObctTzYSCahoEbm7jGkJjv2xQoLbyU6Qf2COMgqBA2U92gkDyGk5675D7qBCVHAKAShLBhQqW/74Dj/yIuZC2HGJOJUjvCcx4Txd8=&authSecret=0000019d715f1de802580a64db2d0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 463183734,
    "name": "Záhada",
    "cover": "http://p2.music.126.net/FJa_-xflD4uz2MSWBppz6Q==/18180424766070758.jpg",
    "length": 191309,
    "artist": [
      {
        "name": "Oskar Schuster"
      }
    ],
    "album": "Záhada",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165746/da1a4a2641c79bdc43c1c99960792f7f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32282010500/c4c2/6868/9ea2/767aab333de2f0861fa1e9ae2dbac26c.m4a?vuutv=M+ho1mxn4rVR6DMSoqdHs67gpMYjKCGJ/40N24EGA2uCTuvHQ60C8TLYynd7AhrQ0ypb7GPd7+dCav2Gx1++Gu5drS7pLC3rYBW1s6oY6nM=&authSecret=0000019d715f5475062a0a3259040006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 468882321,
    "name": "Singur",
    "cover": "http://p2.music.126.net/rnHLMLESV1c-PcFbDgAngg==/18775260557760255.jpg",
    "length": 173267,
    "artist": [
      {
        "name": "Oskar Schuster"
      }
    ],
    "album": "Piano Cloud Series - Vol.1",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1297742167,
    "name": "MELANCHOLY",
    "cover": "http://p2.music.126.net/2bcwjIFFTiaS6Hg_4AdMJQ==/109951165424074168.jpg",
    "length": 128287,
    "artist": [
      {
        "name": "White Cherry"
      }
    ],
    "album": "MELANCHOLY",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165758/0e396751db857ae5cb45d5230a4780cf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096487536/d630/6763/7830/4bfd0afa03118fb559363f500efcae36.m4a?vuutv=iq1V/ejgLTgGKZ9ihjqZDXkIt9N61yU1MZeal/DCHp17/US9jbCDxFFpIU7OXTGlG6VKOGpSJdZvZdSQsdC3zQG50961eAh9OWHZI7ucGmk=&authSecret=0000019d715f84b709ef0a327b080006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1297811542,
    "name": "北木南",
    "cover": "http://p2.music.126.net/GYYAI3pchnod5JCxcKUwUA==/109951163435057408.jpg",
    "length": 212842,
    "artist": [
      {
        "name": "罗永川"
      }
    ],
    "album": "北木南",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1372350500,
    "name": "That's Us",
    "cover": "http://p1.music.126.net/bFGMqmgrGl_mM4WDptHX0g==/109951165438644315.jpg",
    "length": 270461,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "That's Us",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165809/3dc7ab8c4be9909e365e29956550eab4/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19668440659/a8ca/9572/b61d/fe91ef45f9689a2530d87336c198fb74.m4a?vuutv=7ep49orfsGzHfK8iUbqsFAyHVrJVDZ9artvO6rvVPKTGazHsCEtXrb5BoLB6MTbCNDw+VnUL9hI8cKvrn0qFM1CP44jviNd+O1RWOgYD57s=&authSecret=0000019d715fae4611900aaf67d40006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1359357928,
    "name": "何必要",
    "cover": "http://p2.music.126.net/l4IVRd08eSPSj6ylxMxgxQ==/109951164005351160.jpg",
    "length": 210204,
    "artist": [
      {
        "name": "邵帅"
      }
    ],
    "album": "解忧",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1339059081,
    "name": "爱的多或少",
    "cover": "http://p2.music.126.net/EylU6xJaaNZCFMJxGWJEkg==/109951163788154583.jpg",
    "length": 249228,
    "artist": [
      {
        "name": "陈亦云"
      }
    ],
    "album": "爱的多或少",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165819/67b48acee10d5db762d4932a96cacd90/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482346717/699f/8e59/9360/b56366214542cfa579fa4eec9d488aa8.m4a?vuutv=RSAbhzZerHcM0fhertTMWKzfGjIU/F1wuN+fZjZzlIOkC1LcJg1g4xM5asZJkJmN1nDZ/ftCYMCKnfM+ePspbwhnIGQ4ZByToL+vNDQoADU=&authSecret=0000019d715fd81a16cc0aaf778c0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1377530118,
    "name": "如词穷一般",
    "cover": "http://p2.music.126.net/nanSNquiH8LUWypFIGshVw==/109951164208977739.jpg",
    "length": 269774,
    "artist": [
      {
        "name": "于娜懿"
      }
    ],
    "album": "此致那个敬礼",
    "fee": 8,
    "url": ""
  },
  {
    "id": 548808659,
    "name": "通透",
    "cover": "http://p2.music.126.net/alflovZYF4zz4H7nr_HZlA==/109951167855484351.jpg",
    "length": 295459,
    "artist": [
      {
        "name": "陈亦云"
      }
    ],
    "album": "通透",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165829/0b37615e152f7f9aba11da17b6b98e6b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/35836301137/b386/0506/4729/43c1127daff4c592b8de67b9109e5b6c.m4a?vuutv=4xdOKK1NO7Tr9SCGVbDx3tXq0pbwNuF2ebyVPq0B5XMh78C1sSYm/PBwvdfn3LG9hM6NJcGBu705XOOrfeseeFRGpmXHK4mnpf6JbzsljOs=&authSecret=0000019d715ffd1d12e60a3b238616a9&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 574288806,
    "name": "风",
    "cover": "http://p1.music.126.net/9q9NKCkgqyJi7UFBMrdQ4Q==/109951163368328268.jpg",
    "length": 230607,
    "artist": [
      {
        "name": "胡桑"
      }
    ],
    "album": "风",
    "fee": 8,
    "url": ""
  },
  {
    "id": 541687648,
    "name": "Glass House (Stripped)",
    "cover": "http://p2.music.126.net/r1SLDEtOXoNDtieVBSzsgw==/109951165983994180.jpg",
    "length": 223515,
    "artist": [
      {
        "name": "Morgan Saint"
      }
    ],
    "album": "Glass House (Stripped)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165840/7f420437df44c22006e2a04c5726aba8/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32048002520/e0a5/1970/e505/9f00a0aae80a61408bb4917da64c02f8.m4a?vuutv=ixU3lLZwdrm2tdUHxl/T/WE431F8btRBCHcje11+kAZydjENMMGDOB1omuqeM/C+/Q71oqCV6kN0IBJVbjmgnYBZRkIoCYlWSW9b+jPNldA=&authSecret=0000019d7160284118650a64e7000006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 404784579,
    "name": "繁华",
    "cover": "http://p1.music.126.net/H0zkg_xTwqQGooEr_ytgpg==/1422768048326458.jpg",
    "length": 225856,
    "artist": [
      {
        "name": "过又嘉"
      }
    ],
    "album": "繁华",
    "fee": 8,
    "url": "https://m704.music.126.net/20260409165850/ac8a31c7aaf9cf06da8f10278f3e8b3f/jdyyaac/0009/030f/0f53/7cf03f60624eb9e69fb189e8ea34c71e.m4a?vuutv=GHG3Y8rA1DtsOD/tstk2ziCGP8Ronl/8E8haLwDTtOG1kT4aIQaczIFV9tvuRpMpsWVKDwM3nlygsuKk7pY7Y6xH7y01EO29wqMA3gMe3jo=&authSecret=0000019d71604fe417d80a64dc570006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 473740093,
    "name": "时间轴",
    "cover": "http://p2.music.126.net/a0v5cFjgUQCXE56kIXfguA==/109951168111053188.jpg",
    "length": 247061,
    "artist": [
      {
        "name": "赵紫骅"
      }
    ],
    "album": "时间轴",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409165900/57bb7f07a2a2e645d7c6c92294916f05/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32400725007/576f/c15c/9682/55fb1b19ba7a54fb9cbdeec3178940c3.m4a?vuutv=9yNSVuH1Erh2uM34ueknXpljBmiy8uwnC2rhWsrNafuu/J1VLrkVuMBwHmGCopKCCButeThplJlFzVmn4y5H/UviDm6FuCbRcQHnEx0ul/A=&authSecret=0000019d71607622074c0a3b207f0be0&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 494731329,
    "name": "杂草",
    "cover": "http://p2.music.126.net/sz345URTkaHJNut6OtzYMw==/109951162985834142.jpg",
    "length": 323437,
    "artist": [
      {
        "name": "子明"
      }
    ],
    "album": "错在雾里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1363883359,
    "name": "你之外",
    "cover": "http://p2.music.126.net/GKkEo1otmAva2g6pZ5Gl3Q==/109951164058189031.jpg",
    "length": 208181,
    "artist": [
      {
        "name": "小嘉玲"
      }
    ],
    "album": "情歌两三首",
    "fee": 8,
    "url": ""
  },
  {
    "id": 486855953,
    "name": "马马嘟嘟骑",
    "cover": "http://p2.music.126.net/Vj26Q6NSyYH94UFLqRnLQA==/109951163633348213.jpg",
    "length": 183048,
    "artist": [
      {
        "name": "斯斯与帆"
      }
    ],
    "album": "就知道你是这样的女孩",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165941/66a2aa156e70cdfcc453139cd35c8e9f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481825031/10f7/f5f3/faaf/42b5d8cebd36df8f243962d39e13c518.m4a?vuutv=/lBBjgd9SGQQCBIQXxwNTy6lPRye4cFL45QRCi2iDmUuxxmCFJgGFtvkroZRfij0mmVM5PM58c+tN91Or3aL+kPBxEieb5ugxUXZOFkdYEs=&authSecret=0000019d7161177718a40aaf79b00006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1297750769,
    "name": "有人",
    "cover": "http://p2.music.126.net/Q14TNDAXb8DnXTl08wZD7Q==/109951163440240805.jpg",
    "length": 254085,
    "artist": [
      {
        "name": "赵钶"
      }
    ],
    "album": "有人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 424498733,
    "name": "我喜欢的人都跟你好像",
    "cover": "http://p2.music.126.net/JRLLsTgiCOH-2pJs6GmoEg==/18262888137781891.jpg",
    "length": 261632,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "我喜欢的人都跟你好像",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1376166020,
    "name": "你也没有错",
    "cover": "http://p2.music.126.net/-AGvLyK-uP_9NPwrvr1XDA==/109951164194813269.jpg",
    "length": 294737,
    "artist": [
      {
        "name": "王贰浪"
      }
    ],
    "album": "你也没有错",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31192804,
    "name": "See You Again",
    "cover": "http://p2.music.126.net/4cwA2WyLCtS6TGODx835lw==/109951165970846326.jpg",
    "length": 206355,
    "artist": [
      {
        "name": "Elle King"
      }
    ],
    "album": "Love Stuff",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409165955/9af737c82b41626d5b5771dddda2bec0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32104281733/9046/3372/1c55/f8252342f83eae7c6882fdecf20c20d3.m4a?vuutv=5GxSR8UPdvtSBxnkOKoGS703h+Vl/wHnw9oWglJAjdkdOnDrBVqDhVUnxpXdCjAQsfTMWOXnScenR5W42qI4Ti37EB1Dd7htLPpc+BuQ2Jw=&authSecret=0000019d71614da308bd0aaf74b80006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 516094487,
    "name": "生活又不是热血动漫",
    "cover": "http://p2.music.126.net/BcKfvptsgiGMXzI7WodARA==/109951163100187917.jpg",
    "length": 248146,
    "artist": [
      {
        "name": "尚东峰"
      }
    ],
    "album": "生活又不是热血动漫",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1306595892,
    "name": "Good Thing Gone",
    "cover": "http://p2.music.126.net/8W4ZXFhby_ypv6cwURbNxg==/109951165984840871.jpg",
    "length": 292664,
    "artist": [
      {
        "name": "Elle King"
      }
    ],
    "album": "Shake The Spirit",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170055/5aa843005efb368c076081a2c2442c4c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32069274520/25a5/546e/fc6a/75577be0f3f14750aab11d67ac24eadd.m4a?vuutv=MOD5mzKJxXl92iDRFdtaQgpgauf8DrlZrByjVZuRAzqXimuPXM5SYe9sfi+ZzdDplTS18cfewDGv62nEHyVr2p+IyPMChCmfwPFkBxQpd6E=&authSecret=0000019d7162383704580a3258910006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 546723319,
    "name": "愿你",
    "cover": "http://p1.music.126.net/vEmhALkO4a5VdVqpGKipgw==/109951163201704350.jpg",
    "length": 251658,
    "artist": [
      {
        "name": "曹方瑞"
      }
    ],
    "album": "山雾与白鹿 电影原声带",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1349078267,
    "name": "心茧",
    "cover": "http://p2.music.126.net/t15Au_EYYCJrAKECmZB2hw==/109951163894722724.jpg",
    "length": 277579,
    "artist": [
      {
        "name": "周士原"
      }
    ],
    "album": "心茧",
    "fee": 8,
    "url": ""
  },
  {
    "id": 472141855,
    "name": "If Things Had Gone Our Way",
    "cover": "http://p2.music.126.net/8Mjs7H3Qi31-qirCLNYqMQ==/109951163239817522.jpg",
    "length": 207959,
    "artist": [
      {
        "name": "Dave Thomas Junior"
      }
    ],
    "album": "If Things Had Gone Our Way",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28535295,
    "name": "O",
    "cover": "http://p2.music.126.net/z8bRRuF8Gx5RvHJHwpKKkQ==/109951163620484193.jpg",
    "length": 466813,
    "artist": [
      {
        "name": "Coldplay"
      }
    ],
    "album": "Ghost Stories",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170107/3d9ceff6011910fe2614bfbf32dc8e16/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/18710199695/59f4/2c93/dfde/83251306c6254b3ec4aa8dd1eb0c15dc.m4a?vuutv=13/EEdisFxWZcey/3RVqWOM0U1rznP2d5ruRLb8Za0LAF3MPD5BSeILFMqn0XjQWklYSR38XiloJkJYH1glMbaFh2k85O+4PWeSiZi/hmds=&authSecret=0000019d7162670b15590a6491eb0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 408814464,
    "name": "模样",
    "cover": "http://p2.music.126.net/wbyvjsbejvKZXoPY4Dj67g==/18182623789050570.jpg",
    "length": 259343,
    "artist": [
      {
        "name": "方毅"
      }
    ],
    "album": "模样",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170116/46010db9a3c30bfe56c78e2483363662/jdyyaac/5209/0258/550c/ecb0fe47e1523eb3f1a2bf6a4a624318.m4a?vuutv=4O5re/d80B3HPZS/DTbUAC8CUOWcj4Ki7pBVXuOpvpnwUxkxndmS9/G4+148T+KnwFWUOmd92dUxnyiKCSOl/810cKZjgUfbj73mk6McNUo=&authSecret=0000019d7162897d07ed0aaf6e4c0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1313107303,
    "name": "再遗忘",
    "cover": "http://p2.music.126.net/R-EkbHKybQsshx-0M99rnA==/109951163573615384.jpg",
    "length": 282909,
    "artist": [
      {
        "name": "Laymen"
      }
    ],
    "album": "再遗忘",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1380075991,
    "name": "暗恋是一个人的事",
    "cover": "http://p2.music.126.net/-YjLn-440YIepam05LPXWw==/109951168843411279.jpg",
    "length": 268454,
    "artist": [
      {
        "name": "宿羽阳"
      }
    ],
    "album": "暗恋是一个人的事",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170125/54b54557614f4648101287439c50ea50/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28557937067/b7f0/9b45/2cde/553d3ddd17c140e5a51a538546a0d5a1.m4a?vuutv=Fxl4SnOYyZaH1vgJG+lomNjNhLz+4eeBVegySP7/Bwwcw8eFuFTM2RjU4OvRbdNH/RZjIxONugJC4KYsu2nwCIko+y/mj9zPAjNX3hu2dlo=&authSecret=0000019d7162ac7415d50a6491790006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1299010571,
    "name": "Almost Back (Acoustic)",
    "cover": "http://p1.music.126.net/ymS0XZG2t5B-6IAvmFB4YQ==/109951165984585371.jpg",
    "length": 182950,
    "artist": [
      {
        "name": "Kaskade"
      },
      {
        "name": "Phoebe Ryan"
      },
      {
        "name": "Lokii"
      }
    ],
    "album": "Almost Back (Acoustic)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170137/13a2fbaacb594793f6120e1468c9caa0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32928597094/ba28/5def/091f/a1374a6865896b05df8ff5803bca4fab.m4a?vuutv=tsZeL+eEfDdxtTmepkN87WGOaTrDHuDw5IBrNdVK6TOkbhsUTpE185yGg93xANv+KyT5EbkAQWNlCkJSI3PO+e3eRowlX6aQ1HENvvWRPXY=&authSecret=0000019d7162dca31a190aaf6fdd0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 533296148,
    "name": "YOU (Stripped)",
    "cover": "http://p2.music.126.net/hS-dEBWMI8yt2-dbTaIp7Q==/109951165983987385.jpg",
    "length": 241092,
    "artist": [
      {
        "name": "Morgan Saint"
      }
    ],
    "album": "YOU (Stripped)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170147/bedb9554c634a21679c409aa6099a586/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32069176330/5c4d/09fc/4e72/fb28bfd337f3fd7f4ee23cac109c374a.m4a?vuutv=0Phsf8qCm3s4R1u50C8+IDkIXKGFQ0+wA57JmtaWbI/XJydGbLUZb9rOO7uv3ndc+6rJrVjbGCbKc6IT/79NQbifXAmXZHj1dndOlv0eeaM=&authSecret=0000019d7163034c16630a3b1b751037&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1335590077,
    "name": "关于你的心事",
    "cover": "http://p2.music.126.net/lIaiudV9dJayNexEgDARug==/109951163923558948.jpg",
    "length": 236571,
    "artist": [
      {
        "name": "刘梓炎"
      }
    ],
    "album": "关于你的心事",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170157/5766d8c0cfee65eeb6693e6f71975b2c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481976653/8f8d/1fd2/8fad/2f287820e04bb7c8affc249c0fbd9c1f.m4a?vuutv=hNUqIPsOYU4HNCHbef/Lg05VQJNsE98zC+rqK2OVBkYE8A5m+gx3+dOpP9Wqp6+63lnUbmQDAyQQili+ibeLhlZL49GVMKCU+E3mho12Im0=&authSecret=0000019d7163298f16fc0a3b23cf1d95&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1302870973,
    "name": "再也不喜欢你",
    "cover": "http://p1.music.126.net/WEu-jar6hUK7rW3xLl8JjA==/109951163468791068.jpg",
    "length": 224000,
    "artist": [
      {
        "name": "卡式定理"
      }
    ],
    "album": "再也不喜欢你了",
    "fee": 0,
    "url": ""
  },
  {
    "id": 3782908,
    "name": "Red",
    "cover": "http://p2.music.126.net/GUDu6EWXEQ7d_hEskXdaFw==/916992697609554.jpg",
    "length": 259000,
    "artist": [
      {
        "name": "Troi"
      }
    ],
    "album": "Red",
    "fee": 0,
    "url": ""
  },
  {
    "id": 543988258,
    "name": "拒绝情话",
    "cover": "http://p1.music.126.net/rG7zE6K3A373UH8XHI_NqQ==/109951163400201893.jpg",
    "length": 279128,
    "artist": [
      {
        "name": "庆庆"
      }
    ],
    "album": "纠结",
    "fee": 8,
    "url": ""
  },
  {
    "id": 535134686,
    "name": "我真不知道这歌该叫什么名字",
    "cover": "http://p1.music.126.net/MYieXXJq_IGr9ziTQ3ankA==/109951163129954620.jpg",
    "length": 93500,
    "artist": [
      {
        "name": "江皓南"
      }
    ],
    "album": "我真不知道这歌该叫什么名字",
    "fee": 8,
    "url": ""
  },
  {
    "id": 464277358,
    "name": "标本",
    "cover": "http://p2.music.126.net/36-UaVGKtlZFXmq61MG03w==/109951164235432551.jpg",
    "length": 172479,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "标本",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1367408290,
    "name": "他不喜欢你",
    "cover": "http://p2.music.126.net/Oct54UCkGLMHGNSRnAtILQ==/109951164096454538.jpg",
    "length": 230869,
    "artist": [
      {
        "name": "蜷花（李子璇）"
      }
    ],
    "album": "别开我玩笑",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1347445635,
    "name": "要命",
    "cover": "http://p2.music.126.net/5bDKaUNtBdFvVY_wiRPYbA==/109951164814830678.jpg",
    "length": 217258,
    "artist": [
      {
        "name": "茶茶"
      }
    ],
    "album": "时效性的质量轨迹",
    "fee": 8,
    "url": ""
  },
  {
    "id": 496073410,
    "name": "再也不会有人会比我更爱你",
    "cover": "http://p2.music.126.net/b2_AuddnpreCTQPwTajg2A==/109951162994638340.jpg",
    "length": 420464,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "再也不会有人会比我更爱你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 501928179,
    "name": "我想你了",
    "cover": "http://p2.music.126.net/DCTHgNSrKPx8blqnIxHdpw==/109951165525111574.jpg",
    "length": 292067,
    "artist": [
      {
        "name": "陶峻汐"
      }
    ],
    "album": "无人问津",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170211/8a4d9664f33269a4c03dccb152bf469d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482037213/6f9e/db39/43cf/5d63008215c1bb5579216cc1c725d871.m4a?vuutv=Ou8JQYJdlox2KznGfeh7aB8fUW82GtulCyDulNwR5rDyUbaNdlmJ/DiSDo+EBi9RHSS1rtP8QxcqckxzlkQDJQHlKqB685FxA3jQOCkpU98=&authSecret=0000019d71635fd51e4b0a3b1bb315ea&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1363959080,
    "name": "超人",
    "cover": "http://p2.music.126.net/4GhkLmQTpf89G1VNsddIag==/109951164059025748.jpg",
    "length": 373714,
    "artist": [
      {
        "name": "王贰浪"
      }
    ],
    "album": "超人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 442493220,
    "name": "愚人",
    "cover": "http://p2.music.126.net/1pCsd0ut4IBmGxC0n13RcA==/109951164235454596.jpg",
    "length": 198619,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "愚人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1368563262,
    "name": "玫瑰往事",
    "cover": "http://p2.music.126.net/NtuVzQnYYRay2gycgzSIqQ==/109951164109577025.jpg",
    "length": 207380,
    "artist": [
      {
        "name": "陶薏点"
      }
    ],
    "album": "玫瑰往事",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1359356908,
    "name": "晚安",
    "cover": "http://p2.music.126.net/-rC55JsnmEWvafJQsAZaWw==/109951170473693123.jpg",
    "length": 289184,
    "artist": [
      {
        "name": "颜人中"
      }
    ],
    "album": "晚安",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31517567,
    "name": "给少年的歌",
    "cover": "http://p2.music.126.net/beK0Y-4vgyZoIy21QFXC0A==/7696581394971660.jpg",
    "length": 319764,
    "artist": [
      {
        "name": "程璧"
      }
    ],
    "album": "我想和你虚度时光",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28359949,
    "name": "Berlin",
    "cover": "http://p2.music.126.net/e8PYfJynjBpibyTjA3oayA==/109951166250500583.jpg",
    "length": 218756,
    "artist": [
      {
        "name": "Small Sur"
      }
    ],
    "album": "Labor",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170223/079938781e8a606cb7d65a670b628c89/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/10166868724/2261/680d/9e8e/b7a93181a0a89263ab6cdf48d7e22020.m4a?vuutv=Pr6cYjNwQSDJyToqHbiVzOP8tA/6GeO5wV4CnEg4CkZ11w2lWAwyCOq+Hs1ODqDS0GAu/jLG7bOJYHCPXddVx1QDkcSnCOcbYE6x6m8RVWY=&authSecret=0000019d716391851b1e0a3b1bb315ea&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1369564749,
    "name": "勿忘",
    "cover": "http://p2.music.126.net/XqOSNWrmwwoV4RbaRr5Tiw==/109951164358496806.jpg",
    "length": 236082,
    "artist": [
      {
        "name": "李代沫"
      }
    ],
    "album": "勿忘",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409170232/6ac7430844679620ccb0ddcf1ea11adc/yyaac/0f5a/515f/5259/808b6c78a3f5b8198d04e3d01f180c3a.m4a?vuutv=9cDhCxxd6k/TrmsoeYpoqCnlmomIRL79MZQapvPRd1v4cZ3XAXKGVVHgkn7tpJJ4u1Wx7CDFWMZmNXpParVuPWiBUscXwpwH9oN2gEyBtj4=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 432430716,
    "name": "g小调的巴赫",
    "cover": "http://p2.music.126.net/FyCPUGdN_w3-sU3Ph86vyg==/109951162848923327.jpg",
    "length": 168698,
    "artist": [
      {
        "name": "177"
      }
    ],
    "album": "巴赫平均律",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1305696930,
    "name": "烟雨琼楼",
    "cover": "http://p2.music.126.net/U2b4kVKRb5yemMykpcsBaA==/109951163519892384.jpg",
    "length": 331666,
    "artist": [
      {
        "name": "Before the Sunrise"
      }
    ],
    "album": "烟雨琼楼",
    "fee": 0,
    "url": ""
  },
  {
    "id": 431811455,
    "name": "I Will Follow You",
    "cover": "http://p2.music.126.net/d6Z9XcqUnKkwWNa3bok5NA==/109951170050443295.jpg",
    "length": 159434,
    "artist": [
      {
        "name": "Toulouse"
      }
    ],
    "album": "I Will Follow You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 16766465,
    "name": "Jesus, Etc.",
    "cover": "http://p2.music.126.net/f0lHOeAeWfPEdpLG4fqglQ==/109951163470679674.jpg",
    "length": 257413,
    "artist": [
      {
        "name": "Bill Fay"
      }
    ],
    "album": "Life Is People",
    "fee": 8,
    "url": ""
  },
  {
    "id": 521416788,
    "name": "路人",
    "cover": "http://p2.music.126.net/pRSgpezZUZC4D3Iv6IbymQ==/109951163123434763.jpg",
    "length": 277627,
    "artist": [
      {
        "name": "宋宇航"
      }
    ],
    "album": "空想",
    "fee": 8,
    "url": ""
  },
  {
    "id": 523228351,
    "name": "北极星的天空",
    "cover": "http://p2.music.126.net/I5ENG6FsMTs8WHRU4DgWeA==/109951163079647805.jpg",
    "length": 300475,
    "artist": [
      {
        "name": "杨竹"
      }
    ],
    "album": "北极星的天空",
    "fee": 8,
    "url": ""
  },
  {
    "id": 551340498,
    "name": "Car Park",
    "cover": "http://p2.music.126.net/DcW3GS3LMh7mzDSp7u2IIw==/109951173011942015.jpg",
    "length": 173499,
    "artist": [
      {
        "name": "Fenne Lily"
      }
    ],
    "album": "Car Park",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29572418,
    "name": "Exhale (Shoop Shoop)",
    "cover": "http://p2.music.126.net/H5sGJP2Q8pfHtIgtob8B5w==/6655343883966893.jpg",
    "length": 225000,
    "artist": [
      {
        "name": "Robin Thicke"
      }
    ],
    "album": "Exhale (Shoop Shoop)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1352962983,
    "name": "Winter Without You",
    "cover": "http://p2.music.126.net/FuGnm7PU38U-wlNBmC3LSw==/109951165668194860.jpg",
    "length": 191153,
    "artist": [
      {
        "name": "Gloria Kim"
      }
    ],
    "album": "Winter Without You",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170248/2e417cd75b5a2bb53913115c61aa2901/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7130807006/eddf/075a/6e40/169487a78f5c4cca5311bf9463595e25.m4a?vuutv=7Y1vUWlZTni2pXWj96m7PetAi89HtblcSGMzalbo3u/WpER7uVplh6gmBZ6EbuVhp1J2dx9c8ixX/TYI1/xCZ0ibGsmbO+8GHP/+okdOaw4=&authSecret=0000019d7163f2860a660aaf74830006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1333144715,
    "name": "Higher Than the moon",
    "cover": "http://p2.music.126.net/BOiaGUf84Yv_sZKRpmZilg==/109951163723250222.jpg",
    "length": 211750,
    "artist": [
      {
        "name": "TRØVES"
      },
      {
        "name": "Obeds"
      }
    ],
    "album": "Higher Than the moon",
    "fee": 8,
    "url": ""
  },
  {
    "id": 544246849,
    "name": "California (Acoustic Version)",
    "cover": "http://p2.music.126.net/mUr1JJfTgLKA6lPPihbIcA==/109951163180459250.jpg",
    "length": 199645,
    "artist": [
      {
        "name": "ROOKIES"
      }
    ],
    "album": "California (Acoustic Version)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170259/a7cc4bf22fd573cafd41a1823b66e539/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/33453681254/abd4/9520/bea5/d6ce3bcce951185a53d87ca66a805bdd.m4a?vuutv=2slf0AxB2w4lsDNucO4sH/92jnqW3v0Q3WYZdcKajCUBXMxNEqzPI3GR4P4gI6B6lq6fJP+XkKjTqty2Iw3b70DhDp8sybvRDqYASzDZ+jw=&authSecret=0000019d71641caf06940a3b22551485&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 569870549,
    "name": "Everybody Loves You",
    "cover": "http://p2.music.126.net/TPnDoZqFeOTQ6TDc7kVaVg==/109951165765452694.jpg",
    "length": 204648,
    "artist": [
      {
        "name": "Charlotte Lawrence"
      }
    ],
    "album": "Everybody Loves You",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170308/969aa2a450642b5f85380b26501b8b7f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/7664754211/0698/2f3f/544d/38fd7af3d026ce3e1ee30e1092aee155.m4a?vuutv=IjZQJ6B70QXjlkgjIWFIngr+OfAwsFFpd2rq/nXtxFxfgEDQe6jqWYZ6fg21UNra2mjsZQH6RkumWy4DJOuZLyOQ9XJiTnSpp0vhxJNy99E=&authSecret=0000019d7164403200cc0a64a4e70006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 185779,
    "name": "在凌晨",
    "cover": "http://p1.music.126.net/JBNlgNhUC3rvnZ6iJZPFqg==/109951170729198147.jpg",
    "length": 314136,
    "artist": [
      {
        "name": "张震岳"
      }
    ],
    "album": "阿岳正传",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409170318/c8704ee1060d5a7ebe78f19284c510c6/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3058599231/b2af/3168/8fca/657d33662e12df5bce5c5324a30011f1.m4a?vuutv=PnDBZ6xVuyBSC60GZvR9Xw91sVKnEdEnpSjbCRwH87UAeqSrQSQsHWXK5YEBeeVcJate42ZKmhj7Z1+GwmkeGSeUpXG7BLKhZ5CQjQdhoYA=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1352542682,
    "name": "小城",
    "cover": "http://p2.music.126.net/db1_oEfQh19At1byXq5boA==/109951163711949662.jpg",
    "length": 271838,
    "artist": [
      {
        "name": "李曼维"
      }
    ],
    "album": "关于你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 407444039,
    "name": "海王星",
    "cover": "http://p1.music.126.net/nLwViGP1a9mzSRk9LiklJw==/17702137207431775.jpg",
    "length": 199392,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Demo2015",
    "fee": 8,
    "url": ""
  },
  {
    "id": 503613596,
    "name": "我们都曾越过崇山峻岭",
    "cover": "http://p2.music.126.net/JZEQU6jFTmDiNb2RQ1l6wQ==/109951163012048713.jpg",
    "length": 245054,
    "artist": [
      {
        "name": "陈文非"
      }
    ],
    "album": "我们都曾越过崇山峻岭",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19466006,
    "name": "Draw Your Swords",
    "cover": "http://p1.music.126.net/4UYv_r71ttURwyiWPZO8fQ==/109951167028193190.jpg",
    "length": 395613,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Down the Way (Bonus Track Version)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 536483221,
    "name": "你怎么蠢到我喜欢你都不知道",
    "cover": "http://p1.music.126.net/lEybD09WAflaIkPj91qv2w==/109951166608686943.jpg",
    "length": 246648,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "蠢",
    "fee": 8,
    "url": ""
  },
  {
    "id": 557169166,
    "name": "林深时见鹿",
    "cover": "http://p2.music.126.net/ygu_0gFrcKUVSH5H6gv-7g==/109951165375933710.jpg",
    "length": 319042,
    "artist": [
      {
        "name": "苏刘"
      },
      {
        "name": "Wilreams"
      },
      {
        "name": "青阳苏打"
      }
    ],
    "album": "青阳苏打",
    "fee": 8,
    "url": ""
  },
  {
    "id": 523756204,
    "name": "别处的夕阳",
    "cover": "http://p1.music.126.net/7YXc17t-edLz-Ta-Xe2bMQ==/109951163081729505.jpg",
    "length": 201190,
    "artist": [
      {
        "name": "陈婧霏"
      }
    ],
    "album": "别处的夕阳",
    "fee": 8,
    "url": ""
  },
  {
    "id": 540333734,
    "name": "Panic Room (Acoustic)",
    "cover": "http://p2.music.126.net/zgUo40F4zVtVqf044l8RvQ==/109951165984022586.jpg",
    "length": 257106,
    "artist": [
      {
        "name": "Au/Ra"
      }
    ],
    "album": "Panic Room (Acoustic)",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170332/a72246580e53a15dafc1ad8028d21967/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32404856188/b821/057b/8d16/989184a11c0fb1d354a4e5b20f23f695.m4a?vuutv=MmjdaqfODlt4fcwm517v0lZcG7Kj4fxqO4oUrsHrGkpuPqPatbDMXFSFDYGhliPnUSeQBWOEpcIhdntTCKk0qwFoik5SUxPAZQuW8NmOgA4=&authSecret=0000019d71649bfe080a0a32bf560006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 514761125,
    "name": "阍者",
    "cover": "http://p2.music.126.net/Nm9VNrN0oE9kmPPyxTomoA==/109951163742438662.jpg",
    "length": 296331,
    "artist": [
      {
        "name": "简弘亦"
      }
    ],
    "album": "柔软的国",
    "fee": 8,
    "url": ""
  },
  {
    "id": 431791310,
    "name": "Thinkin about U",
    "cover": "http://p1.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 236518,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29497924,
    "name": "Light A Fire",
    "cover": "http://p2.music.126.net/JiFe7TW90mB2sQrDy0Yb0g==/109951166216705538.jpg",
    "length": 241746,
    "artist": [
      {
        "name": "Rachel Taylor"
      }
    ],
    "album": "Come Alive",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170345/f1b6165408ae3b58f2a8f216c11c249a/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32404703550/23b9/3107/0269/d1a3fdbf8bddf63783932170e8943733.m4a?vuutv=MVxyYIS1QKgZk7jJBailOKaK6InLvsGNoZVVI2gVoT1V72ER3dDxvhusyPeiHfre7/02sAsuntBeT1sUS7IDV+KFU9WIgv2MBn2ux19tBrs=&authSecret=0000019d7164cff51c290aaf775e0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 535725079,
    "name": "路过",
    "cover": "http://p2.music.126.net/rmtIr1HvCu9xKki70GN6Wg==/109951166608682496.jpg",
    "length": 215053,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "心情气象播报台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1300644881,
    "name": "奇妙能力歌",
    "cover": "http://p1.music.126.net/ukWidNej0zpCsqCHXpnGdA==/109951163990661981.jpg",
    "length": 109520,
    "artist": [
      {
        "name": "房子帆"
      },
      {
        "name": "赵海宁"
      }
    ],
    "album": "给东北姑娘的歌 终极版",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1297742551,
    "name": "夏洛特烦恼",
    "cover": "http://p2.music.126.net/K9_4UJR1a9Tx4YOE1ACWag==/109951163438552602.jpg",
    "length": 192299,
    "artist": [
      {
        "name": "金志文"
      }
    ],
    "album": "夏洛特烦恼",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170356/25a2861e0af59f377873bb2b1b6300fe/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/30366218417/ef6c/2e4d/c583/48fe4187db4de0e159c6d63203fa74b1.m4a?vuutv=RkKfsKFT717ih0PFTSec7nIzmicyWVGnTVBdKieDum6OAbAB4X3stdD9P+wYGVM23AZFkPhJtg48mytFVwXEbd6S+0TbHrV9gCXf6THr4PM=&authSecret=0000019d7164fbd51ed20aaf7aa60006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 503741427,
    "name": "懒",
    "cover": "http://p1.music.126.net/rmtIr1HvCu9xKki70GN6Wg==/109951166608682496.jpg",
    "length": 193594,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "心情气象播报台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 485054631,
    "name": "晚安",
    "cover": "http://p2.music.126.net/a_8Owid3mOJ5KBkpBSmSvw==/109951163409398567.jpg",
    "length": 192848,
    "artist": [
      {
        "name": "陈尤利"
      }
    ],
    "album": "耳语2.0",
    "fee": 8,
    "url": ""
  },
  {
    "id": 526979373,
    "name": "不再",
    "cover": "http://p1.music.126.net/yoJ7yYJTWJkeIG3nQ_B42Q==/109951163095463362.jpg",
    "length": 217273,
    "artist": [
      {
        "name": "罗永川"
      }
    ],
    "album": "不再",
    "fee": 8,
    "url": ""
  },
  {
    "id": 489215708,
    "name": "半坏街灯",
    "cover": "http://p2.music.126.net/1D5dvXYxieQ5jbjcXFedXQ==/109951163173461725.jpg",
    "length": 279500,
    "artist": [
      {
        "name": "陈尤利"
      }
    ],
    "album": "半坏街灯",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34852507,
    "name": "Just Breathe",
    "cover": "http://p2.music.126.net/F0aCxrVSMOvFh47MHIRYCQ==/109951163157783378.jpg",
    "length": 260453,
    "artist": [
      {
        "name": "Don Brownrigg"
      }
    ],
    "album": "It Takes All Kinds (To Make This World I Find)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1314385613,
    "name": "荒唐",
    "cover": "http://p2.music.126.net/1YnM0_qxp6IVxfIF6S157Q==/109951163579687054.jpg",
    "length": 247896,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "假洒脱",
    "fee": 8,
    "url": ""
  },
  {
    "id": 21204780,
    "name": "Habits (Feat. Mads Langer)",
    "cover": "http://p1.music.126.net/2iRwRkAFxTbPmF0Ba9s5Ig==/109951165966766424.jpg",
    "length": 223492,
    "artist": [
      {
        "name": "Maria Mena"
      }
    ],
    "album": "Viktoria",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170411/c4e93cd2d4e4a4b02ae5c5ebb29b3d20/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32048866491/d00f/262e/5b45/16bb225aea5438e3aa2920ecc41b75da.m4a?vuutv=QaCN+Hw8Xht0zuJxKW6J3M41z5lCJP+TWc/yScoQ6+/JmIsinCHGQecZDhJW3tbabWSIpvy50B88hBcbS4/W9lHexj9nI0MEeWpKIlFWM7U=&authSecret=0000019d7165346f13f60aaf6af10006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 436487081,
    "name": "Familiär",
    "cover": "http://p1.music.126.net/U2Dw6vcepR2KPL2B9GT2iw==/109951163471282769.jpg",
    "length": 235988,
    "artist": [
      {
        "name": "Agnes Obel"
      }
    ],
    "album": "Citizen of Glass",
    "fee": 8,
    "url": ""
  },
  {
    "id": 553755659,
    "name": "可不可以",
    "cover": "http://p2.music.126.net/WafK2OQfEtqXitdDXJ772Q==/109951163252847249.jpg",
    "length": 240889,
    "artist": [
      {
        "name": "张紫豪"
      }
    ],
    "album": "可不可以",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170422/9ff4e60cad068f21055b9b2717827257/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481673308/98f5/a5a1/d78a/94120424909f3fbe6c3d3aa5f091c350.m4a?vuutv=Xodn0nYCVwJJfd0MPoxBR1sYvgl0Odkr7207ZiRQJA3uBv8EePnmeRaB2pfrjyUtTEAQzsmehyy3vWvQ29EBu/IBg82q7Gd/mlXKOBG0Hkk=&authSecret=0000019d71655eb31e0f0a3b239802e6&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 2061452,
    "name": "The Right Path",
    "cover": "http://p2.music.126.net/-BSzumTDm1wUEN3ZdTJGkw==/109951169376472517.jpg",
    "length": 148389,
    "artist": [
      {
        "name": "Thomas Greenberg"
      }
    ],
    "album": "Age Of Innocence",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170432/04788d28cf5e0397323d2862ba06a038/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14960893836/b1f1/6a94/eadc/c52c457a465af86f6b01165e6cab4bdd.m4a?vuutv=wHeG2fnpXO/+/FJZY4IIQOxHjlbzwhat1nCI9iFshukEUt8AiXwYlub8/TqLskZAslrrRysEhCSvEEw5c5fG0qbDjNnnW0a5AMUw+qZLbs8=&authSecret=0000019d7165867607e80a3b23ab0589&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1314382744,
    "name": "尝试温柔",
    "cover": "http://p1.music.126.net/1YnM0_qxp6IVxfIF6S157Q==/109951163579687054.jpg",
    "length": 259726,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "假洒脱",
    "fee": 8,
    "url": ""
  },
  {
    "id": 863595710,
    "name": "夜27.",
    "cover": "http://p2.music.126.net/aijuTY49c_ou5YKcB7nKHA==/109951163382944695.jpg",
    "length": 275644,
    "artist": [
      {
        "name": "司徒骏文"
      }
    ],
    "album": "夜27",
    "fee": 0,
    "url": ""
  },
  {
    "id": 27630180,
    "name": "Come Close Now",
    "cover": "http://p2.music.126.net/pL55eSA87JQjzYV1u8xeeg==/109951169377384473.jpg",
    "length": 262896,
    "artist": [
      {
        "name": "Christa Wells"
      }
    ],
    "album": "Feed Your Soul",
    "fee": 8,
    "url": ""
  },
  {
    "id": 27630183,
    "name": "You Are My Defense",
    "cover": "http://p2.music.126.net/pL55eSA87JQjzYV1u8xeeg==/109951169377384473.jpg",
    "length": 227526,
    "artist": [
      {
        "name": "Christa Wells"
      }
    ],
    "album": "Feed Your Soul",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170446/faa662e61b58d297e9cbc3de7ef28c92/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34073155831/919b/2bcb/17b0/01d3304432974a6a41bd7ebb2efe1c9b.m4a?vuutv=/LPItzOhN0Fev1lH1Wz49gK+JxGOsVm/720DKZQ1EbccUa0QfGsYl2pZFaGuXPLRs699mNGiXw+8CfNDY7nUDJZtb2s+3zYvDcnfLwI2ctc=&authSecret=0000019d7165bef70f5c0aaf70400006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 461080452,
    "name": "认真地老去",
    "cover": "http://p2.music.126.net/LwisuwyurwWs3zpkoBIC9g==/19024849695642179.jpg",
    "length": 223878,
    "artist": [
      {
        "name": "张希"
      },
      {
        "name": "曹方"
      }
    ],
    "album": "认真地老去",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170459/a85a35f0670b09305355a0e09db3cb87/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481794298/7f38/0a95/1420/560fdf213de53ae2e992de749d051b10.m4a?vuutv=hiGNKR7O7Q8/xjst12olPwEZQRF1JsBwDBx7GlkWU9MC5+c09YN/1Bk2K691MXtfXoeyx/JEasboWZOCNup5SO92QAbv/2zgCSAB5MJPTDY=&authSecret=0000019d7165f044048c0a3b23f30a94&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 476598236,
    "name": "You're Somebody Else",
    "cover": "http://p2.music.126.net/uEwOIFG3dpOYGHfkpDvrpw==/109951170927735844.jpg",
    "length": 218133,
    "artist": [
      {
        "name": "Flora Cash"
      }
    ],
    "album": "Nothing Lasts Forever (And It's Fine)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 421423808,
    "name": "虚拟",
    "cover": "http://p2.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg",
    "length": 240626,
    "artist": [
      {
        "name": "陈粒"
      }
    ],
    "album": "小梦大半",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170509/4fd61597b8982b30ce1933fea7150a06/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481673388/5b21/5008/b9af/9966880fa61a5b1200ddff8de12d77f1.m4a?vuutv=fGXJxfkB2t/LkCFmkiOJUT1WVRIsJW4K/Y2v5HR7AI6EHGp0Gxt73FM620JR++TG7F6l838ZwaBlvU5n03KevO17be0niIusyDspdld3Nho=&authSecret=0000019d716616411c3a0aaf771d0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 457761771,
    "name": "Permission To Love",
    "cover": "http://p2.music.126.net/T8iDqmHYxp2hy32YWd7kTg==/18212310602992815.jpg",
    "length": 245527,
    "artist": [
      {
        "name": "SAARA"
      }
    ],
    "album": "Permission To Love",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170517/a3081ecb8fcedcc117c8652d6824f2f7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32049252861/0758/3672/eb4d/ebbea4bdb01379b8eecf5511623a1e55.m4a?vuutv=6i3g8ROOyXtx4JnCqwcZyzXZP7aqG53Psx0qHt5qw4ve7iK/s01LpFw9TJQ7i/yA2gEsMN5cVjZHkypIkYGmGH4O6oTWc9pR4QEggKCvxNo=&authSecret=0000019d716637730f920a3b22621054&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 444269190,
    "name": "Clay",
    "cover": "http://p2.music.126.net/gkiMY310Rwqa5gT5jQmOew==/109951165976084446.jpg",
    "length": 216758,
    "artist": [
      {
        "name": "Grace VanderWaal"
      }
    ],
    "album": "Perfectly Imperfect",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170526/62b246b0a948cbb8e6ba1721437b6240/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32103692557/b24b/0b8d/3ba0/effe2571d3c54af2d9e571b411721b70.m4a?vuutv=TgVNCbQ62zNhYkDCBdlzuQDxlj8w5J348eM4DTy/gBXuJQGIKLbd3KvSART1KcIy0wXMm0XpE72CBX/+HdSPC/3Fb24Wh2T8EYuy/+fH/2Y=&authSecret=0000019d71665b7d0a4b0aaf707a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 562598081,
    "name": "房间-新版",
    "cover": "http://p1.music.126.net/F5x7VgIRu_awduoWu2sDeA==/109951163302871673.jpg",
    "length": 241904,
    "artist": [
      {
        "name": "刘瑞琦"
      }
    ],
    "album": "房间-新版",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170536/c39e6c4cc023bde849b6c61938a85ffe/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481678735/7f0e/f9e5/7450/d9ef9c9c0f82deef615f67f7961ef5e0.m4a?vuutv=ClV8YP1b/2wKGLr4rCGqppiNQEkvDn1c1R9l75bCJ3YRCP2WaxD0CDwoR+931oUL19Y6rLtiVcNysw9b6cudNtCvwhRnsJTwlC9EU2BUtAY=&authSecret=0000019d716682c41be70a32bcd20006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 21204786,
    "name": "Secrets",
    "cover": "http://p1.music.126.net/2iRwRkAFxTbPmF0Ba9s5Ig==/109951165966766424.jpg",
    "length": 179467,
    "artist": [
      {
        "name": "Maria Mena"
      }
    ],
    "album": "Viktoria",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170605/035550f3491d433a2ef4b562da795abd/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32103302682/265f/44e3/2323/971051616068f0589e2b950e1b881de0.m4a?vuutv=5wqAKkwd08jlCOZyWAK+y797kgMNqBEuXmFDLshvsBcaM+iH7JWp4g/6HOWp+4mluhFNXNzgO3jyiNi7r0aJW8by42+oV/COKFSynhrGBKs=&authSecret=0000019d7166f1af04d20a2ceea21da4&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 444269191,
    "name": "Beautiful Thing",
    "cover": "http://p2.music.126.net/gkiMY310Rwqa5gT5jQmOew==/109951165976084446.jpg",
    "length": 224885,
    "artist": [
      {
        "name": "Grace VanderWaal"
      }
    ],
    "album": "Perfectly Imperfect",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170615/9ab518bf23b3d8583c8046bfaa3746a0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34580513493/29fe/bf5b/dc90/0e851a47a829d0a6522e28c1274c5bea.m4a?vuutv=qAIhm+jisM0an8jgCBzjjRY84ea7iz5HUM3D4HDqCxp/T1vo+RR/F5M0u4IMSrqhSHrmNgVws3WCZCSzttoCPtyegrqOh9yjneaw6dCeMyw=&authSecret=0000019d71671afc1ee70a64fccb0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 557581095,
    "name": "双子",
    "cover": "http://p1.music.126.net/8OzHoLnmHswMzQgxmXczmg==/109951163287182565.jpg",
    "length": 230933,
    "artist": [
      {
        "name": "徐秉龙"
      }
    ],
    "album": "双子",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170625/6fc05933228af92185de55ac8fb29704/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481845737/a2c3/08ee/c746/b1f03bd6928acb23ec6278656262d109.m4a?vuutv=eBg1ZPpMHY1HKaxmAppTnekkqVebA5vIFtrDO/QQ4Lt2Cm36x6J5ExpMS7U3jLSVZqgDOPJpm0LkRnxgrEAslX68Gm05ailQfVd4ohsRfmY=&authSecret=0000019d7167412602c40aaf77b10006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 412902075,
    "name": "我也不想这样",
    "cover": "http://p1.music.126.net/dLZR68iwH2AN23A1ivc95g==/109951168110995497.jpg",
    "length": 264097,
    "artist": [
      {
        "name": "徐佳莹"
      }
    ],
    "album": "日全蚀 演唱会现场实录",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170634/deeb998baf2b7417231af05eb7e316fc/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/45154270946/2641/1e83/e079/bd5726ba475bb6e5745b32858fa69244.m4a?vuutv=sZrVqZhq+qRJDE4pOFLX1908Mqtjgwuy9Ei4RkL6i+8gQMk9ldNgZuwYJJhClWbJrbaSsd9k1IYyt0U3AXl0vzsLGCeIMH+t1ltQ4K9SPBg=&authSecret=0000019d71676443190b0a6487fc0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 404543833,
    "name": "Whispering Still",
    "cover": "http://p1.music.126.net/EZqZ4ZF0u4lKPfdHl9r4Fw==/109951164682036658.jpg",
    "length": 203833,
    "artist": [
      {
        "name": "Charity Children"
      }
    ],
    "album": "Fabel",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170643/9c8434c58265301a3eb56a27f8a38313/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4493149205/2525/482b/8b14/943d3dc1762bfd1e605b7c6b36ef4aae.m4a?vuutv=v+A1phsdxn+u+1Fjzx93LtU56gvKy+mQV6Yd+1GaqYznonJpUTqtT2p8iz/L1mZBpgT9Eu9t89pyaXhN5TuzrJPjBPeeRVoPYcmrRN/rAwQ=&authSecret=0000019d716786200b3d0a329af90006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 32717809,
    "name": "Build It Better",
    "cover": "http://p1.music.126.net/nw6EMUQ3RnCUV0wIP68jDQ==/7802134511651504.jpg",
    "length": 230000,
    "artist": [
      {
        "name": "Aron Wright"
      }
    ],
    "album": "Build It Better",
    "fee": 0,
    "url": "https://m704.music.126.net/20260409170654/ccb4929aa90d5f43ee0187a5162c0a88/jdyyaac/055a/530e/025e/204b13affbddf45b4e9b545287913ef7.m4a?vuutv=pteXzkN+WBjqTpfxXV67/xvB0p1Pi53gIjG1TpQXgu3CiCHZ9wN4UKcR0bAVMj/NO01HruA0E6nGzsC/l2nvGa5BMndotEBMc6hmODh4wKQ=&authSecret=0000019d7167b0471a680a64b1b70006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9oaWdoZXI"
  },
  {
    "id": 28193020,
    "name": "Midnight",
    "cover": "http://p1.music.126.net/H-U2ZSjtzIR4DnhyNaHNvQ==/109951169487857517.jpg",
    "length": 166661,
    "artist": [
      {
        "name": "Barcelona"
      }
    ],
    "album": "Not Quite Yours",
    "fee": 8,
    "url": ""
  },
  {
    "id": 480769653,
    "name": "Sweet",
    "cover": "http://p2.music.126.net/9dpCWsj3DNR-3AzRRhcQcg==/109951167302437735.jpg",
    "length": 292110,
    "artist": [
      {
        "name": "Cigarettes After Sex"
      }
    ],
    "album": "Cigarettes After Sex",
    "fee": 8,
    "url": ""
  },
  {
    "id": 525278524,
    "name": "无问",
    "cover": "http://p1.music.126.net/SJLDel776uY6MEKEU5GbjA==/109951163099854364.jpg",
    "length": 258976,
    "artist": [
      {
        "name": "毛不易"
      }
    ],
    "album": "无问",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29850531,
    "name": "不找了",
    "cover": "http://p1.music.126.net/mvFkPIcN_rYYEp9Ao767GQ==/109951163081125462.jpg",
    "length": 249100,
    "artist": [
      {
        "name": "郭旭"
      }
    ],
    "album": "不找了",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409170706/41026b28a1f7b198f8689171d59720f7/yyaac/565a/0253/0658/a0e53a103b59aab8d45712820a380d41.m4a?vuutv=S0kiX4twuuFGkmSsJio0GteksYjznAxxAIeQiXX/ovOgwwMdWG1TZKEDLDFqYOlwUXGyfawpsBPZvx1AaGjEkIfWVyy0HUpAPQUMTay8NY0=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 479598964,
    "name": "椿",
    "cover": "http://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg",
    "length": 217640,
    "artist": [
      {
        "name": "沈以诚"
      }
    ],
    "album": "椿",
    "fee": 8,
    "url": ""
  },
  {
    "id": 297752,
    "name": "门",
    "cover": "http://p2.music.126.net/_N5s7MEJWPLVFxt0RiQtnQ==/109951169889420553.jpg",
    "length": 201456,
    "artist": [
      {
        "name": "魏如萱"
      }
    ],
    "album": "在哪里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 447280415,
    "name": "Liar",
    "cover": "http://p2.music.126.net/ZFDnuWYAOruWoo1_bL4wAw==/109951168957764678.jpg",
    "length": 236866,
    "artist": [
      {
        "name": "LÉON"
      }
    ],
    "album": "Liar",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170718/1a96fc852801d705d25bb99da4879a7c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32069623414/39d0/467e/1a23/80bfe053fd327cff348e340b434a6baf.m4a?vuutv=/ZdcX8Lchry4/BO96+f7qwpJDlgHVb6rXtyKbuQsg6KF4YkxDv3as+ixLckqbScoylYRyLLqIUCwVc0xOw3QwYAUitxbr7/VMAYzTPcGfIY=&authSecret=0000019d716811da11780a3257800006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 461124355,
    "name": "Soaked Through",
    "cover": "http://p2.music.126.net/JLHP01uFWwtKCP1ocJ1D7g==/109951169265709572.jpg",
    "length": 201170,
    "artist": [
      {
        "name": "Sara"
      }
    ],
    "album": "Haunt",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2775190,
    "name": "End of the World",
    "cover": "http://p2.music.126.net/Wq-qj0UFEV3n4SA14HjfzA==/6663040464536802.jpg",
    "length": 165465,
    "artist": [
      {
        "name": "Julie London"
      }
    ],
    "album": "Cry Me a River",
    "fee": 0,
    "url": ""
  },
  {
    "id": 528271324,
    "name": "Time Like This",
    "cover": "http://p2.music.126.net/dqfTDApGLbjWTC6h6OjoeQ==/109951163100806620.jpg",
    "length": 266375,
    "artist": [
      {
        "name": "TIMERS"
      }
    ],
    "album": "Time Like This",
    "fee": 0,
    "url": ""
  },
  {
    "id": 448707059,
    "name": "我又想你了",
    "cover": "http://p2.music.126.net/UuhOIZRvk55cqjVeZB3Omw==/18813743464544638.jpg",
    "length": 280781,
    "artist": [
      {
        "name": "陈信喆"
      }
    ],
    "album": "我又想你了",
    "fee": 8,
    "url": ""
  },
  {
    "id": 512766626,
    "name": "Sam",
    "cover": "http://p2.music.126.net/uTCrw4dg-ppESO0zt2lXHA==/18433312439931844.jpg",
    "length": 315626,
    "artist": [
      {
        "name": "Jessie Ware"
      }
    ],
    "album": "Glasshouse (Deluxe Edition)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170731/0049a1c157b890fe11c0db9710fd8a05/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/10695273454/46e6/2d6c/c6d4/849557a78076d355ee39ec96c96b99ae.m4a?vuutv=8kqy+Mij47mVzKxIC/9KaUaGvcU8ptcWHqVEW7MZUyxaHmvu272L+yQ1Sr6RUaAzu4v9PKVhPQ+CZ8CfOvlK8J0wsXrsnlMb1D6feXOi6wQ=&authSecret=0000019d716842a1158a0aaf6d720006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 448445624,
    "name": "别问我（Cover 孙丹菲）",
    "cover": "http://p1.music.126.net/7VotCF7QZVgvh6uLPtyL7Q==/109951166328126998.jpg",
    "length": 280267,
    "artist": [
      {
        "name": "河豚"
      }
    ],
    "album": "HETUN20161221",
    "fee": 0,
    "url": ""
  },
  {
    "id": 18449193,
    "name": "Say Hello",
    "cover": "http://p1.music.126.net/CjwyooRRF_6oT6rP6mBmDA==/109951166683572040.jpg",
    "length": 141493,
    "artist": [
      {
        "name": "Rosie Thomas"
      },
      {
        "name": "Sufjan Stevens"
      }
    ],
    "album": "These Friends Of Mine (Expanded Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 483671599,
    "name": "追光者",
    "cover": "http://p2.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg",
    "length": 235833,
    "artist": [
      {
        "name": "岑宁儿"
      }
    ],
    "album": "夏至未至 影视原声带",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170744/e7ada3e442b1d708742cc54a32b8deba/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481663596/10e1/d54e/8db6/05bbbdd052b94d4771e5e358d0c00ebf.m4a?vuutv=YrbPSq541V5rtjP8B70TafBmH9j7Rb6vaXfjDEo3wnhpFMqK8GqpbiVuKGpCjYTxXo67XcSNoqJo3lcRqRy+hJtMCTswOeiFhaedu8yH68s=&authSecret=0000019d716875cb0b1e0aaf7f4b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 514765774,
    "name": "蓝色降落伞",
    "cover": "http://p1.music.126.net/Ay5wDVF_0TXZmE2K_ljX4g==/109951171292487969.jpg",
    "length": 236376,
    "artist": [
      {
        "name": "周深"
      }
    ],
    "album": "深的深",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170756/769fbf0b11964939406339cc858d4628/jdyyaac/035c/005a/025b/46f34f860a7085c7b9ab5162db429c79.m4a?vuutv=MtwhSKJseit+xrSNJ7vPIRAB+yUOllq++NxT1TdTRknQ3WrZ7aNbT8UQbHC8hIJOd17BuYT5skjDzErAPQm4EOJ7y2Q4QbjN+QRop2GWDSk=&authSecret=0000019d7168a484186a0a6488d20006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 480768067,
    "name": "只道寻常",
    "cover": "http://p2.music.126.net/xzu30SOCSvImthUU6wnGmA==/18920396090921010.jpg",
    "length": 272466,
    "artist": [
      {
        "name": "谢春花"
      }
    ],
    "album": "知非",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170827/c11cf7e74781e740204c07d7ead8eac5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482228912/a573/9bd2/6c4f/a78c7a3a970ea23b2efdb0c19579125b.m4a?vuutv=iTOiFxlZEzwa/lH/A2eu9GvH+n6Gj3Z32ZGj0iMeOorjqzcbKee59kST/nP+11ciLoc/66QsMI/yRTlui330bvoyOLz4NGb9iEIcQp8GkKE=&authSecret=0000019d71691b9513b60a3b236f1e39&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 33054289,
    "name": "好女阿己",
    "cover": "http://p2.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 255000,
    "artist": [
      {
        "name": "San塔"
      }
    ],
    "album": "热门华语266",
    "fee": 0,
    "url": ""
  },
  {
    "id": 441491828,
    "name": "水星记",
    "cover": "http://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg",
    "length": 325266,
    "artist": [
      {
        "name": "郭顶"
      }
    ],
    "album": "飞行器的执行周期",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170837/d51a65b52da9fcc844b48e1921cdff15/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19844357021/35b4/5a3f/55cc/3eb5c0389b7dee1a5528d852714a3d1b.m4a?vuutv=98dKR0/qo+ppChHA7f0o871HdWWPLDgXHYshDExjvHLwjvNn0LFKVaAN/yNWVbsFrM1I5Da5qKUrBkq1H7EIkWX7XnzvcwpdekKaJlmUjzM=&authSecret=0000019d71694310016d0aaf69900006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 505818831,
    "name": "余生相",
    "cover": "http://p2.music.126.net/gs9xF0rGLnUmsBr26ju73Q==/109951163190161411.jpg",
    "length": 258188,
    "artist": [
      {
        "name": "伏仪"
      }
    ],
    "album": "硬骨见鹿集",
    "fee": 8,
    "url": ""
  },
  {
    "id": 501220618,
    "name": "记昨日书",
    "cover": "http://p2.music.126.net/gs9xF0rGLnUmsBr26ju73Q==/109951163190161411.jpg",
    "length": 249273,
    "artist": [
      {
        "name": "伏仪"
      }
    ],
    "album": "硬骨见鹿集",
    "fee": 8,
    "url": ""
  },
  {
    "id": 491686047,
    "name": "Human",
    "cover": "http://p1.music.126.net/oZIfYYPMmgRCYcTu54pRaA==/18701593278831135.jpg",
    "length": 197671,
    "artist": [
      {
        "name": "MADILYN"
      }
    ],
    "album": "Human",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2917617,
    "name": "Bodega Rose",
    "cover": "http://p2.music.126.net/dEqPtx3g48uR7CauoATOEQ==/1773512255607890.jpg",
    "length": 229266,
    "artist": [
      {
        "name": "Kesang Marstrand"
      }
    ],
    "album": "Bodega Rose",
    "fee": 0,
    "url": ""
  },
  {
    "id": 471486421,
    "name": "安静的时间里",
    "cover": "http://p2.music.126.net/fFlB8bLrTM1haW318H3IKw==/109951162899256700.jpg",
    "length": 271098,
    "artist": [
      {
        "name": "小海"
      }
    ],
    "album": "安静的时间里（demo）",
    "fee": 8,
    "url": ""
  },
  {
    "id": 37095481,
    "name": "Underflow",
    "cover": "http://p1.music.126.net/tgDDbHrddBoJJ6ubupeNhw==/109951164887147869.jpg",
    "length": 217746,
    "artist": [
      {
        "name": "Emma Louise"
      }
    ],
    "album": "Underflow",
    "fee": 0,
    "url": ""
  },
  {
    "id": 480971272,
    "name": "没了",
    "cover": "http://p2.music.126.net/IFgRlf1BYszYv6vBtxTIYA==/109951162936105587.jpg",
    "length": 132009,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "没了",
    "fee": 8,
    "url": ""
  },
  {
    "id": 35314235,
    "name": "Like I’m Gonna Lose You",
    "cover": "http://p2.music.126.net/xIb3pIvb5ScMX7OZcPrhQw==/109951163878847508.jpg",
    "length": 232338,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Like I'm Gonna Lose You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 21292944,
    "name": "Sophia (Single Edit)",
    "cover": "http://p2.music.126.net/m3uTuDHH-yzC4An7ei8r1g==/109951167699025434.jpg",
    "length": 221906,
    "artist": [
      {
        "name": "Nerina Pallot"
      }
    ],
    "album": "Sophia",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170856/9bcfdea8e92a11dbb403e66685e1f3c1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/16087246620/0092/f785/e8ba/ee7bca569d4cae4dbc438a2c20348f9c.m4a?vuutv=6+tgErH08QkJR/iDt/expxy11xnu0clwBLfQA3lxV6z2BpgA9197X4C0v6d04AKcM19RY4siwYwPUjCE2KOCPY/E4pSlw4INIO5iPmnpqKU=&authSecret=0000019d71698f690f280aaf6cc20006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 480783619,
    "name": "迂回",
    "cover": "http://p1.music.126.net/M0AhkrzPfToIIxXIjM9QrA==/109951162935593755.jpg",
    "length": 288576,
    "artist": [
      {
        "name": "徐秉龙"
      }
    ],
    "album": "迂回",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409170904/1f08a7bb027675bc54bd5b593f40b406/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3046816294/ce5c/7348/a096/eb5c8c69e4f97e9fc146aac39d26f193.m4a?vuutv=HkbLosVTARwqn7rZ8ApFBk5+luFR04eyGNDXtILl+UVDB6vAoLLxWG9tyYXy4jMiKHvb75C3tkX/kg9N/Z1oU4ImZ7ZOA5MtRVuoQkqahl4=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 445505374,
    "name": "心仪",
    "cover": "http://p1.music.126.net/WG3KkAPWN0-MFTfkQar4hA==/17962721463181443.jpg",
    "length": 184900,
    "artist": [
      {
        "name": "徐秉龙"
      }
    ],
    "album": "路远马亡",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170912/c7faf2205fb933589c17e4d9945acf77/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482102124/b2bc/9ad6/95d4/9be61bbaae0cc50118ddc4b6bab8a038.m4a?vuutv=+9hDW4DsifYUViSygAxRntpa3ckT7fRF64HOG9YUlVnVeNMjP9CKFPjOQOxMWZigbc6uBDnplZsWZW5t2bI7Cm9J74rVuaqnD69dXuUoM5Y=&authSecret=0000019d7169cbc700b90a3269720006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 39224600,
    "name": "Don't Forget About Me",
    "cover": "http://p2.music.126.net/hrO9EDYaSxTjQ0Zb3PJoPA==/109951167341662347.jpg",
    "length": 268853,
    "artist": [
      {
        "name": "CLOVES"
      }
    ],
    "album": "XIII",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409170921/4be0d347847eb88ac4b5b3b4e5b3b4f3/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19412508973/6280/3013/bcd0/2b20aa46fdabf15fdae28ffb72145a6f.m4a?vuutv=zGuLwiPvhtrbmKjuhWXLRm2E4rgr0aW5Lwr5wq3i8S95EtujZtnh8UnjTGQ4QvKk43HACnxxb5jg5SJrHUWjONzimu9yLxvtPg/5yHdRFF4=&authSecret=0000019d7169f1131d2d0a3b2381072a&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 421885447,
    "name": "我有我爱我",
    "cover": "http://p2.music.126.net/1QWgd6P6BR8UEVz2HvnPAg==/18238698881948878.jpg",
    "length": 236700,
    "artist": [
      {
        "name": "少年霜"
      }
    ],
    "album": "我有我爱我",
    "fee": 0,
    "url": ""
  },
  {
    "id": 442503648,
    "name": "我在你的未来",
    "cover": "http://p2.music.126.net/GzJC_J1uxKaXaDZ76Wc4dg==/109951162811670391.jpg",
    "length": 263688,
    "artist": [
      {
        "name": "左颜"
      }
    ],
    "album": "小时候",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32102375,
    "name": "Fluid",
    "cover": "http://p1.music.126.net/dGyKYmRgARkE31EbBDCEhA==/109951164854733657.jpg",
    "length": 209750,
    "artist": [
      {
        "name": "Ames"
      }
    ],
    "album": "Fluid",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170934/38782aa4fe04d96b9a5083605e787d6d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8663170208/5bbc/2109/eba3/30325dbc84dd1cf5944eac0149c38b41.m4a?vuutv=gALXSByGKLyXtS1tK+bzSOXI4KQgJZpfdQ6OZyjt3idsYcK8SD+ox8rO9UtuMGSxCjOZr0K2CknQh7qq/2zn2CI/nDBrwUgHhSKRHMMARlo=&authSecret=0000019d716a22a10d760aaf7b6a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 409430938,
    "name": "Window Pain",
    "cover": "http://p2.music.126.net/7aRIYrLmruVwyOT-KlPlvA==/1420569029105189.jpg",
    "length": 195500,
    "artist": [
      {
        "name": "Xenia"
      }
    ],
    "album": "Artemisa",
    "fee": 0,
    "url": ""
  },
  {
    "id": 442869203,
    "name": "保留",
    "cover": "http://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg",
    "length": 270133,
    "artist": [
      {
        "name": "郭顶"
      }
    ],
    "album": "飞行器的执行周期",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409170943/c45e25178bc7e8a48bfde496ef8eaa48/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481671241/7c43/7c50/16bd/7e581d44ed20a726ee17e4fdba287b02.m4a?vuutv=dLLCVSkAsW3+3hWN+607/8N6k00lfDyAMGKD4aJvuP6MqgS7zaLdbcIu9Xg3xCayTaf//tsbBt+KrpEQ4hjbhWHXbRoJ7R+ezZNG0gMweUs=&authSecret=0000019d716a44950af30a64e75a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 427606933,
    "name": "你眸中有一个宇宙（翻自 池年）",
    "cover": "http://p2.music.126.net/rVG3EfddmEBfXrVINcDCOQ==/18198016951756197.jpg",
    "length": 222407,
    "artist": [
      {
        "name": "不会唱歌的线"
      }
    ],
    "album": "你眸中有一个宇宙",
    "fee": 0,
    "url": ""
  },
  {
    "id": 421870099,
    "name": "恋爱的犀牛",
    "cover": "http://p2.music.126.net/nJ9nSgv0t_zfKNOEmt3Arw==/17791197649359137.jpg",
    "length": 241923,
    "artist": [
      {
        "name": "黄雨篱"
      },
      {
        "name": "刘逸诗"
      }
    ],
    "album": "恋爱的犀牛",
    "fee": 8,
    "url": ""
  },
  {
    "id": 41665424,
    "name": "怕生",
    "cover": "http://p1.music.126.net/TN6V2aDjicy39H8cxQJv7g==/17831879579390115.jpg",
    "length": 347637,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "第二人称",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28133173,
    "name": "Summer Girl",
    "cover": "http://p2.music.126.net/pZGs05NhSNUJoPCL4uE1Wg==/109951164850527807.jpg",
    "length": 215146,
    "artist": [
      {
        "name": "Fleurie"
      }
    ],
    "album": "Fear & Fable",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409170953/a00df68cf6e9351ad5543a16878ee95e/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3662026782/8dac/75c1/d968/3a6f23ff5c539ce283c0e091c1c4e215.m4a?vuutv=lazZBss8ZFNui415QZoQwoEqf2bG1MwQdNHbTtJbi54gIZ1GVFKvGTXTWqo6DHQkgOoMNnWqEvbE0LNW6ZkfW9KoLOVdmFarcz1LgzUxS4k=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 30394960,
    "name": "过来人 (Live)",
    "cover": "http://p2.music.126.net/A8iQ8rtE_89oMB_ivGy3sw==/7798835975923145.jpg",
    "length": 251026,
    "artist": [
      {
        "name": "hush！"
      }
    ],
    "album": "Everyone's Gonna Miss You",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28662038,
    "name": "San Francisco",
    "cover": "http://p2.music.126.net/UzF1FiN-VQ4BYGoOHLAd8A==/109951168254682908.jpg",
    "length": 246733,
    "artist": [
      {
        "name": "Stu Larsen"
      }
    ],
    "album": "Vagabond",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171006/96d48c9609faf08f13f1f324c5a94321/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8982172816/9723/e08a/dbc1/fba121be80b4547a89db126eebcc5aae.m4a?vuutv=zAcVT/0HiRHBy6rYM+gH1QzoZBBtkS4EB2xyDOgGAnDZif87cAaloT4MmjGEYauQKIpX/2SycnYiOId+zk+fd/i5K0DKalRp1+HbBL/jCYU=&authSecret=0000019d716aa19c14c20a3b227a1ab5&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 31517162,
    "name": "Fear of Fear",
    "cover": "http://p2.music.126.net/cY1LmtdPUBuj-GwHVG-DKA==/109951167549528782.jpg",
    "length": 178698,
    "artist": [
      {
        "name": "Passenger"
      }
    ],
    "album": "Whispers II",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171015/942d79d4fac1d5fb4e0fa5570796156c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12012122865/ffb7/b0f0/1f1d/7c3275d1fb3bdc3a53bbd5b7b4fe7725.m4a?vuutv=RnjbTihSuJ+iFxXoowz8+Hz+Ed+5lwS6oYKxYW5voxcWMaqgD+nuLE4zRfbyobc4KewdwCeRwrTxIVonDEiFfbI/EE/VzB5Frw0+RSsf4eU=&authSecret=0000019d716ac39d0e0c0a3b20821207&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 34228369,
    "name": "The Climb",
    "cover": "http://p2.music.126.net/3EeK1jMZldoMGT496nl1_Q==/109951168473932291.jpg",
    "length": 197240,
    "artist": [
      {
        "name": "Cœur de pirate"
      }
    ],
    "album": "Roses (Deluxe Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28038363,
    "name": "Where Is My Mind",
    "cover": "http://p1.music.126.net/K9RybH385QWbXkw95AM1NA==/5823013580751658.jpg",
    "length": 216040,
    "artist": [
      {
        "name": "Sunday Girl"
      }
    ],
    "album": "Where Is My Mind",
    "fee": 0,
    "url": ""
  },
  {
    "id": 431610330,
    "name": "Beautiful Birds",
    "cover": "http://p2.music.126.net/m7Qsnt70W5foAJX5yXyBKA==/109951169477308825.jpg",
    "length": 213760,
    "artist": [
      {
        "name": "Passenger"
      },
      {
        "name": "Birdy"
      }
    ],
    "album": "Young as the Morning Old as the Sea (Deluxe Edition)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171026/d56e5e9b29d3cb1a698f814c1c9d66cf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/35055051805/fdea/06a2/55c2/3068d4ac15322ad97edfc2830f0efc95.m4a?vuutv=NSlJtdvfIccvAboN02ouWlHYU51+q8NlZXreyRHUseOOGC73m8t7hwwGEY4GVvsVCblGJYqSTX/wm1vbaP19puAukjxoxSRg4NydqyA3sok=&authSecret=0000019d716aeda902ba0a64a51a0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 41664255,
    "name": "未知伴侣",
    "cover": "http://p2.music.126.net/TN6V2aDjicy39H8cxQJv7g==/17831879579390115.jpg",
    "length": 287112,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "第二人称",
    "fee": 8,
    "url": ""
  },
  {
    "id": 412573142,
    "name": "Packed",
    "cover": "http://p2.music.126.net/c2VB_r9bD1iX99_FHk_R_w==/109951172903960689.jpg",
    "length": 255260,
    "artist": [
      {
        "name": "AGA"
      }
    ],
    "album": "Ginadoll",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171042/66c34627ae4f7d7a783925348fbe1640/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29299396504/b6e8/cf95/4cf1/5929ddcbf24066015f52cf7411f063c8.m4a?vuutv=xz5GLbEFc20PP1mJ/adlU1ohqm29KqdTrtnwyOYtYz+FN9Q3MAt3OfwjAcQ1pEFtwP9CvQ/eoqipgua5sTlUBw/5DLK9MlB25CeIGA+gxmQ=&authSecret=0000019d716b2b47188d0a32629b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 31445554,
    "name": "七月上",
    "cover": "http://p2.music.126.net/uxyYBS5jhmi_DN4xDYy3eg==/7872503255697381.jpg",
    "length": 190093,
    "artist": [
      {
        "name": "Jam"
      }
    ],
    "album": "阿敬的单曲集",
    "fee": 8,
    "url": "https://m704.music.126.net/20260409171051/11d169249023966adfc522c0ad55f79b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481659051/9551/228a/269b/b45f210a21c8af70cb0be2ed544bd0c6.m4a?vuutv=wAEbHiIirZzDYuOa3MDo5G5rCr1eMzvHhITnMU83Kan8llAkQrrWVxRqh/9iMiIpe80JAI8MH+s1vuf3cXL/XG7Zm3JdhZHv0Go01WuTJuU=&authSecret=0000019d716b506906ce0a3b227b2322&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 418603177,
    "name": "Six Feet Under",
    "cover": "http://p2.music.126.net/ijP5nfST3YxxzJ2mXTEbag==/1393081244481550.jpg",
    "length": 191626,
    "artist": [
      {
        "name": "Billie Eilish"
      }
    ],
    "album": "Six Feet Under",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409171102/da07adc6483a30075e7661a811558a05/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2976625870/f9a9/3e57/0938/13f4d9e6a407371a05f0f6222d85b4d9.m4a?vuutv=/lmkDSVEKIYxkzgLi7Y8184YcQ0PNzXwFTcPY42umeJXxiVS8E1Xl4EQm6Vqit3v2i3hun8avpGxbrHI13bD06sH+TjQwqnF5NANfqgjqDs=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 34228431,
    "name": "Hurts Like Hell",
    "cover": "http://p2.music.126.net/KeVuYDLhlbfPB_vb_BJVJw==/109951166443179625.jpg",
    "length": 232626,
    "artist": [
      {
        "name": "Fleurie"
      },
      {
        "name": "Tommee Profitt"
      }
    ],
    "album": "Hurts Like Hell",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28692687,
    "name": "Without You I Am Dying",
    "cover": "http://p1.music.126.net/47fAW4HuEMKa8ij0_zK1gg==/109951169168591005.jpg",
    "length": 281400,
    "artist": [
      {
        "name": "Painless Destiny"
      }
    ],
    "album": "Romance",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171112/855340dccbd37e61ca1bbde86c858319/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32177433013/1dcc/e279/5c9f/fe559f3fc52e36a09c18d62092397c0d.m4a?vuutv=pdMlyVPzvVtk7ImCDINsRWcs3Q2H3f8EbnJ+5KqR6e1jcndNNtoj+hoTHiEYfRvOpqHORvd1BgxRnFq++11KQyOPMku/7gIUxWGE3qnRe5g=&authSecret=0000019d716ba13117570a64fc260006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 79923,
    "name": "Lucile",
    "cover": "http://p2.music.126.net/hdrf7AmZDxRT7ARXzFcL1Q==/109951167561783871.jpg",
    "length": 244546,
    "artist": [
      {
        "name": "丁可"
      }
    ],
    "album": "Lucile",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171125/00db0d2afef8d43d048e0623fb3d54f6/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/15081118322/36bf/7a21/5514/434e6d8c4b60acb93bab10068d2acc0f.m4a?vuutv=3zIcPNUXH/56cop4FBF3+DIjzz/SgK3nSCt6XBx64i86nYaQV5JmnDoqjmoVZgAaIj3HWZxH6T8KIw0iQ78DJO3/7LqU5mz7rpKcRZpS9/k=&authSecret=0000019d716bd3f40aba0aaf64c8000b&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 441835832,
    "name": "Falling",
    "cover": "http://p2.music.126.net/puRRNCHncD-tU9lU8rpgeA==/109951163958009406.jpg",
    "length": 251213,
    "artist": [
      {
        "name": "Joshua Radin"
      }
    ],
    "album": "The Fall",
    "fee": 8,
    "url": ""
  },
  {
    "id": 17950503,
    "name": "Sunday Morning Birds - Singin' Hallelujah",
    "cover": "http://p1.music.126.net/Ulb_8xPgukbzsiXELA4XYQ==/109951170436178901.jpg",
    "length": 232120,
    "artist": [
      {
        "name": "Pajaro Sunrise"
      }
    ],
    "album": "Pajaro Sunrise",
    "fee": 8,
    "url": ""
  },
  {
    "id": 422428548,
    "name": "Landing Guy",
    "cover": "http://p2.music.126.net/2q8ThUAEszBuxGlGJz8XUw==/17731824021476100.jpg",
    "length": 246997,
    "artist": [
      {
        "name": "刘昊霖"
      },
      {
        "name": "kidult."
      }
    ],
    "album": "鱼干铺里",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171135/1614ef51cee874b38947649502512f20/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481793348/ab82/5e4e/0533/9b67a9076447eb7dcbcd9507d0ace601.m4a?vuutv=sdTWRIKC3f6gyjx4VmIl2+9hLNwuMtRfi5mrt31AwOrdcI3q27UyNx22UMY0Yo1LSIPureLsi3EzOmj1XVjybizhH+t+I3cDBnZoa6csJ3Y=&authSecret=0000019d716bfdcb129f0aaf64ed0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 417596830,
    "name": "美好事物",
    "cover": "http://p1.music.126.net/RsmgVs3F99IfpGOjZ347HA==/18252992533065802.jpg",
    "length": 198765,
    "artist": [
      {
        "name": "房东的猫"
      }
    ],
    "album": "美好事物",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28524064,
    "name": "Never Play",
    "cover": "http://p2.music.126.net/mAAFSIsqBSeLYEm8rVJgzw==/109951170965280995.jpg",
    "length": 169065,
    "artist": [
      {
        "name": "Emily and the Woods"
      }
    ],
    "album": "Emily and the Woods",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171145/6432fa4deab99c68ee7423ed022a6c83/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/59881073348/4802/c654/a50a/c4ccdb923205037c80fad7c119fe1e13.m4a?vuutv=oGIRs5KmzjmeqWcpuTApVCb0qadhsDarDf0rdC2Kf1wEzKph6dHyucPrw/3yWI47Isd50AYVaH8Q0IpHd0zDb3+fzoTPGkNaYpZi6aLA9e8=&authSecret=0000019d716c229f00250a3b1b8a0bfe&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 416892296,
    "name": "安和桥",
    "cover": "http://p1.music.126.net/Nze7lE61wH1bhTSXpVBvGQ==/109951163445284035.jpg",
    "length": 248499,
    "artist": [
      {
        "name": "宇西"
      }
    ],
    "album": "安和桥",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34167935,
    "name": "无脚鸟",
    "cover": "http://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 272935,
    "artist": [
      {
        "name": "蛙婶"
      },
      {
        "name": "蔡翊昇"
      }
    ],
    "album": "热门华语278",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28646468,
    "name": "Shadow of Doubt",
    "cover": "http://p1.music.126.net/d8PKQ5DgNMPgTRgmjiY5pg==/5790028232098074.jpg",
    "length": 239000,
    "artist": [
      {
        "name": "Melanie Penn"
      }
    ],
    "album": "Hope Tonight",
    "fee": 0,
    "url": ""
  },
  {
    "id": 30284674,
    "name": "初恋旧爱新欢",
    "cover": "http://p1.music.126.net/ydNOkLw4mHoFmB0QmKxDlg==/2882919488721526.jpg",
    "length": 303560,
    "artist": [
      {
        "name": "RAiNBOW计划"
      },
      {
        "name": "林力尧"
      }
    ],
    "album": "红",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19675491,
    "name": "Twenty Seven Strangers",
    "cover": "http://p2.music.126.net/-ptOHbd9So8dA3mIStgAfA==/109951163392119334.jpg",
    "length": 204213,
    "artist": [
      {
        "name": "Villagers"
      }
    ],
    "album": "Becoming A Jackal",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32957827,
    "name": "一座城",
    "cover": "http://p2.music.126.net/LyrD0npp_jHR2GNxJQ6tnw==/17966019997940477.jpg",
    "length": 293015,
    "artist": [
      {
        "name": "白亮"
      }
    ],
    "album": "一座城",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20113376,
    "name": "Canon in D (Pachelbel)",
    "cover": "http://p2.music.126.net/uV0ypx-AxS3YZhH3RUQoSQ==/109951165351921011.jpg",
    "length": 275000,
    "artist": [
      {
        "name": "Mike Strickland"
      }
    ],
    "album": "The Piano",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1293032,
    "name": "Starlight Memories",
    "cover": "http://p2.music.126.net/9mY71crkeOgQrFVK-AY9cg==/109951164439091720.jpg",
    "length": 338064,
    "artist": [
      {
        "name": "Dennis Kuo"
      }
    ],
    "album": "Study Music Project: Music for the Mind",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409171159/f0fd34380a1c31cc7f06af788fa43d4a/yyaac/obj/wonDkMOGw6XDiTHCmMOi/1915814231/24ed/4471/21ae/73a0a400cdabfe0656c47b53d96e2230.m4a?vuutv=6fi2zSjkRWuhkmL77ftuewQvhIgE7ca6qh5NUjbJGmejcrlhHNSZmUt2yZ6PWMbQ9Juua0SSxnISlEqyDH3k4erl+XOZatUp+7InjhbtSY8=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 18578531,
    "name": "Everyone's in Love",
    "cover": "http://p1.music.126.net/tVJfbaKG6RKF44rRJ1oPhw==/109951164667911398.jpg",
    "length": 268200,
    "artist": [
      {
        "name": "Justin Rutledge"
      }
    ],
    "album": "Man Descending",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171207/4690d7ca10746fbb989c0450c5afbd00/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/27788315447/f093/c391/c10d/27cdb1a73729dd58be27f565c48f2824.m4a?vuutv=0VCUEYKXhO5TLjybPmTy66MmN4btm2oe823xjmc/jx5XUdEMovieEb5UpPERY+jiVCKwQn8DnCpzOjxLd4XSKgAvH6KRyrpLWJVpvnYZOko=&authSecret=0000019d716c7a071c9e0aaf76730006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28847994,
    "name": "Crazy",
    "cover": "http://p2.music.126.net/HVRnkRgYyN13jx5_FJoEow==/109951169377381919.jpg",
    "length": 242000,
    "artist": [
      {
        "name": "Daniela Andrade"
      }
    ],
    "album": "Crazy",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171216/8406ce7a352b54e1bfd8429f29b87141/jdyyaac/005d/0f5b/065f/771d2c44b881bfd9d8e0155b78673633.m4a?vuutv=phbcJhfIB4YCWeBEm0fQb8lSoXEvP2W7OSRAT7FW7zJiR3cqlEXLUIOQsV1oIOAAADYNxwha874PElml2SS+P+jzU0odPtjI+LlnzXgDj1U=&authSecret=0000019d716c9c8c10f70a6482970006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 417833270,
    "name": "TWO",
    "cover": "http://p1.music.126.net/gaIGQ1krbXOLyNWvRbyq9w==/1417270500276173.jpg",
    "length": 260952,
    "artist": [
      {
        "name": "Ne-Yo"
      }
    ],
    "album": "TWO",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1374125,
    "name": "This Woman’s Work (Kate Bush)",
    "cover": "http://p2.music.126.net/IZilQIG21NYDPwrZPW8VGA==/941181953428794.jpg",
    "length": 192053,
    "artist": [
      {
        "name": "Greg Laswell"
      }
    ],
    "album": "Covers EP",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2878157,
    "name": "Lost & Far From Home",
    "cover": "http://p2.music.126.net/dhp8yNKhbjSGIFurYPXoSw==/109951170987170997.jpg",
    "length": 237865,
    "artist": [
      {
        "name": "Katie Costello"
      }
    ],
    "album": "The City In Me",
    "fee": 8,
    "url": ""
  },
  {
    "id": 35625822,
    "name": "可以不说",
    "cover": "http://p2.music.126.net/W_srVOtG_DKS1-txPLqNQQ==/3273246117001205.jpg",
    "length": 274736,
    "artist": [
      {
        "name": "RAiNBOW计划"
      }
    ],
    "album": "橙",
    "fee": 8,
    "url": ""
  },
  {
    "id": 405599685,
    "name": "Painting Greys",
    "cover": "http://p1.music.126.net/seTJFvUHGofcvARbiH7OUg==/109951168313242757.jpg",
    "length": 227368,
    "artist": [
      {
        "name": "Emmit Fenn"
      }
    ],
    "album": "Painting Greys",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28352987,
    "name": "A Way To You Again",
    "cover": "http://p2.music.126.net/qGeygGUuV2_6LyDnwuz9lQ==/109951170987781237.jpg",
    "length": 225535,
    "artist": [
      {
        "name": "Peter Bradley Adams"
      }
    ],
    "album": "The Mighty Storm",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32217106,
    "name": "客从何处来",
    "cover": "http://p1.music.126.net/W-WHCe2sQK1MQ_ftE8oCcA==/7760353069698404.jpg",
    "length": 358000,
    "artist": [
      {
        "name": "燕池"
      }
    ],
    "album": "燕歌行",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34609166,
    "name": "故梦",
    "cover": "http://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 288261,
    "artist": [
      {
        "name": "伦桑"
      }
    ],
    "album": "热门华语276",
    "fee": 0,
    "url": ""
  },
  {
    "id": 26284002,
    "name": "If You Love Her",
    "cover": "http://p1.music.126.net/stofV9C6pRJpw57kYVufDQ==/109951163373915782.jpg",
    "length": 253280,
    "artist": [
      {
        "name": "To Be Frank"
      }
    ],
    "album": "If You Love Her",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171230/feb4dcf276a9ed39b13db04a10ed69bb/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482255014/42cd/bb13/41c1/3fa59c934439e1952e35639baf858074.m4a?vuutv=9VQpvk2dFrlB/5i1/uIVTl0MEJqaGJbD95GoQcVqVXfAYiCuxSgT22b945Yru+nWz4SMEc0WNcSOf3rlOso/R18OVvxrYIVRZTifdgjDkWA=&authSecret=0000019d716cd0c108ef0a3283430006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 26584453,
    "name": "梦伴",
    "cover": "http://p2.music.126.net/yIV2HGwGzr8eI3Jq_YUSsA==/109951165806226394.jpg",
    "length": 247000,
    "artist": [
      {
        "name": "李悦君Ericaceae"
      }
    ],
    "album": "历久尝新",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171238/1d3ededc4708b26096ac5b22b1cbaa95/jdyyaac/535c/0159/055e/d6d29794e86335f443c52455dcba4f73.m4a?vuutv=i2IwwIoWP9S46kKryxm3GZfNlJYK7697GfKjJegUXsLLwiSf/otciW4PDJeAq5YoOWyz0qyRSuAGahuMGIQ2AdY6BEE2PoWnophO2gNexow=&authSecret=0000019d716cf0f117f30a3b1bc30ed3&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 5092287,
    "name": "To Be Alone With You",
    "cover": "http://p2.music.126.net/JHiZ7idJMu0Xp6bburEn7g==/109951169418248960.jpg",
    "length": 212266,
    "artist": [
      {
        "name": "Joshua James"
      }
    ],
    "album": "Seven Swans Reimagined",
    "fee": 8,
    "url": ""
  },
  {
    "id": 18733198,
    "name": "Dealbreaker",
    "cover": "http://p1.music.126.net/Hoi64OvcNAgy32euQG18gw==/109951165142258884.jpg",
    "length": 344146,
    "artist": [
      {
        "name": "Rachael Yamagata"
      }
    ],
    "album": "Chesapeake",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31721697,
    "name": "青春大概",
    "cover": "http://p2.music.126.net/rbUy9P12xdIssA-2t6lfkA==/2888417047256583.jpg",
    "length": 226719,
    "artist": [
      {
        "name": "上上"
      }
    ],
    "album": "青春戏",
    "fee": 0,
    "url": ""
  },
  {
    "id": 33916532,
    "name": "River of Gold",
    "cover": "http://p2.music.126.net/UchpnjfGcUkgwjHIsFaaiw==/3331520232351421.jpg",
    "length": 192339,
    "artist": [
      {
        "name": "Daniela Andrade"
      }
    ],
    "album": "Things We've Said",
    "fee": 0,
    "url": ""
  },
  {
    "id": 31445772,
    "name": "理想三旬",
    "cover": "http://p2.music.126.net/ryk8Gu64rOhlYn0pc2Q8Ww==/109951168090271827.jpg",
    "length": 210814,
    "artist": [
      {
        "name": "陈鸿宇"
      }
    ],
    "album": "浓烟下的诗歌电台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29572637,
    "name": "I'm Glad I Found You (Solo)",
    "cover": "http://p2.music.126.net/M2jdTdEW8ZyTwSiVHpUr4Q==/109951168500761753.jpg",
    "length": 202346,
    "artist": [
      {
        "name": "Neil Young"
      }
    ],
    "album": "Storytone (Deluxe Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 33991219,
    "name": "Good Night",
    "cover": "http://p2.music.126.net/RQUbzS8vyFdiGgIGejYm2A==/109951163238325544.jpg",
    "length": 219360,
    "artist": [
      {
        "name": "Teen Daze"
      }
    ],
    "album": "Morning World",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171252/4e57c5b962ff121d997fcdf85824386c/jdyyaac/5352/075a/065f/d889bd73c500224946cb15cee07a17d0.m4a?vuutv=5LhGm3jhxyf3Wo/3z5tFJf2eyJ9JRdwv/OHxbscrViOiiuQ0jkvSxn2p6cFpASE2JeNQXylnXyrC3l2hPvd6ZcKUNY7t8q9pNXCPNwFelTo=&authSecret=0000019d716d29bd08090a3258910006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28306482,
    "name": "Brand New Day (feat. Nina Nesbitt) [Acoustic Version]",
    "cover": "http://p1.music.126.net/FkNdzTy_2hqq6OIwh068cw==/109951165967524384.jpg",
    "length": 221146,
    "artist": [
      {
        "name": "Kodaline"
      }
    ],
    "album": "In A Perfect World",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34468945,
    "name": "Keeper",
    "cover": "http://p1.music.126.net/WRXvW_6eaVvd7wpu5QDINQ==/109951163920615520.jpg",
    "length": 265518,
    "artist": [
      {
        "name": "Furns"
      }
    ],
    "album": "Keeper",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28394558,
    "name": "North",
    "cover": "http://p1.music.126.net/uYBKHvx8-zi8Yy8LOuvMnw==/109951172208994210.jpg",
    "length": 259375,
    "artist": [
      {
        "name": "Sleeping at Last"
      }
    ],
    "album": "Atlas: Land",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171303/22f17a3e3b4482c43b115cf3ce0c1238/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/63563357998/35e7/b6b7/1276/1a29842ca0e3b1f2c617a192573f38f1.m4a?vuutv=Xr26vUhfiVgZhkML8/W3SEu2/jeuDRtNB/6Vz5BaGz+Ckvbapcjmxyb2ovjfv2iFOtwZJsbAbsc363Y749k2Zx9OjGaelJdOeCjU61Nk0O0=&authSecret=0000019d716d52f715c50a64c76e0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 20978362,
    "name": "The Gettysburg Address",
    "cover": "http://p2.music.126.net/_BjtrSOi1VqMq-csQ23SCA==/693791837137385.jpg",
    "length": 360893,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "The Decline Of The Country & Western Civilisation",
    "fee": 0,
    "url": ""
  },
  {
    "id": 31546195,
    "name": "Limits",
    "cover": "http://p2.music.126.net/FxejNbXsU0zcqbLMvCWynw==/109951163092095241.jpg",
    "length": 193304,
    "artist": [
      {
        "name": "Arctic Lake"
      }
    ],
    "album": "Limits",
    "fee": 8,
    "url": ""
  },
  {
    "id": 399953119,
    "name": "Ilusm",
    "cover": "http://p2.music.126.net/GcgzNfcE8dgP6GuhRndSyg==/109951168487220477.jpg",
    "length": 199005,
    "artist": [
      {
        "name": "gnash"
      }
    ],
    "album": "Ilusm",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34383213,
    "name": "FOOLS",
    "cover": "http://p2.music.126.net/FMtH01nLonFEU9xt0kBRpQ==/7891194953801107.jpg",
    "length": 220473,
    "artist": [
      {
        "name": "Troye Sivan"
      }
    ],
    "album": "WILD",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171314/a5f61312eb7bc811d973671c8eb20dcb/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32385585578/4ac2/f3b4/e302/fb2ac3b9bb4b8936b81ac5615dcd4e9a.m4a?vuutv=3zxpea2oRlZd9z54ky3mkpmwRKQfoOFbxnCQBa7CvHpqRcZi/tK/pR3XtF7Qzxd1egfp2egtVrUg6U71V6nPl35IhdtViiM9SyP8pjesANU=&authSecret=0000019d716d7cf7036a0a3b239a00c7&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28258463,
    "name": "Fall in Love",
    "cover": "http://p2.music.126.net/DvPl_aRzdbBGykMwIaeFKA==/109951169378355620.jpg",
    "length": 266193,
    "artist": [
      {
        "name": "Barcelona"
      }
    ],
    "album": "Love You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32337414,
    "name": "Stay With Me",
    "cover": "http://p2.music.126.net/UgrDLqNyqjefbu--R_hTog==/2915904838722615.jpg",
    "length": 179000,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Spotify Sessions",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171324/6095762aa336ff75fe844f0b34fb72c4/jdyyaac/0653/535a/5453/19fde7e850d03bbd90b6c92b5d4d0b15.m4a?vuutv=0p7MmLBfEGZncy40WpfDGXfDLLTL7irXkEZyPXkVpl6XcZUxYsL0UVJgrOsvWQGu2pI72/dCzxoH5K+89cBtfhlb2WXi73j56D0PI2uKco4=&authSecret=0000019d716da6410e8b0a3252cf0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 32897951,
    "name": "All We Do",
    "cover": "http://p1.music.126.net/vy5CGw708Z3MGj9FUPMtJA==/109951167002287795.jpg",
    "length": 214174,
    "artist": [
      {
        "name": "Oh Wonder"
      }
    ],
    "album": "All We Do",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171335/0f26690dd869279fbf492d2b7f574b35/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19418352622/cc94/e6ca/457d/e5774bd9c7756a1887a05c72d3a2c0e6.m4a?vuutv=jrx8vLefwoBHNF0LSSPl/7Q5NN26OgXQH+LnAkAuwNUNFH6BRFo5Ln81PHQ6s3se1aigUVURN+Y0KIhdgehXGD7tZyGWVp3STL4NhkpC73w=&authSecret=0000019d716dcf6d1d460aaf60800006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28059417,
    "name": "他不懂",
    "cover": "http://p2.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg",
    "length": 232213,
    "artist": [
      {
        "name": "张杰"
      }
    ],
    "album": "爱，不解释",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32192034,
    "name": "Hopefully We're Better Then",
    "cover": "http://p2.music.126.net/yQh_OLGYE8TJ2mTAHGJdyQ==/109951164862513045.jpg",
    "length": 280253,
    "artist": [
      {
        "name": "Paulina Palmgren"
      }
    ],
    "album": "Any Day Now",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171345/d35be13f091ba80b66f94aadd638c95b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12201426749/97d3/1759/701f/7e9ca03ae0a0675ba4d2652efeb7b4ac.m4a?vuutv=28NNOcM0mEe1kPPHiM2bTQTY4yeWBS7nBPuz6znvjr+cP6e/2klDnbAdx7i/u4rsvwM/tvj4vAstoCeTi1dcbSjEma2haBvQVFkB8yzdQtk=&authSecret=0000019d716df7b5113f0a3b1b921173&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 32785456,
    "name": "A Little Bit",
    "cover": "http://p1.music.126.net/dSukWMag2sxsUxR3KHPslw==/2896113629906193.jpg",
    "length": 205938,
    "artist": [
      {
        "name": "Sofi de la Torre"
      }
    ],
    "album": "Winter Mood, Vol. 2",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29418350,
    "name": "Unbreakable",
    "cover": "http://p2.music.126.net/jHXf5P5piBsRZO4IwVhReA==/109951168023880475.jpg",
    "length": 265106,
    "artist": [
      {
        "name": "Jamie Scott"
      }
    ],
    "album": "My Hurricane",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171359/98388b0cb6f346dfc9412c485c3fe90c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/21606851331/0394/6ee5/294c/6d94043c95cfd1dace9c8876ce11ae8c.m4a?vuutv=vhfzJJkjUq+Gof5SHSc+H0u3nZb/fGJCPrA7j5EDCdIFvf8S8JzjbBLpZopYALgiJ+Rzm7JEKwhnwVgBEvi/kJFFcOAugtJaR37ApcN38TM=&authSecret=0000019d716e2db303450a32f4900006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 27810132,
    "name": "Explore",
    "cover": "http://p2.music.126.net/PNPlMXQNd_7kngPmMIA53g==/109951163712802526.jpg",
    "length": 202507,
    "artist": [
      {
        "name": "Prince of Spain"
      }
    ],
    "album": "His Majesty",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19159395,
    "name": "All Out of Love (Single)",
    "cover": "http://p2.music.126.net/VeoWNDh_eyte6oaQxP-kog==/2529976255881424.jpg",
    "length": 231915,
    "artist": [
      {
        "name": "Sara Lov"
      }
    ],
    "album": "All Out Of Love - Single",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2919392,
    "name": "Stained Glass",
    "cover": "http://p2.music.126.net/K-s5nI9sBNE0LM57S7xIeQ==/109951164942258530.jpg",
    "length": 276293,
    "artist": [
      {
        "name": "Kate Tucker"
      }
    ],
    "album": "White Horses",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171410/dedd414c32b38e8fef323d03a4ee9af9/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8693726886/cf2a/5680/9d49/334d50fe2db6f250c1f614aa21389682.m4a?vuutv=m488v6KsV15qwkz1h9k3AXj2TaS+vk6BjQuBhJi+d5PoZqyJUkwnEJdhuYFkD2ZWPpIx7E7J4kWM2gFYeG92jhpIkniRHf6vNvuya3fIqjs=&authSecret=0000019d716e57b21de30aaf66e70006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 17657671,
    "name": "Climbing My Dark Hair",
    "cover": "http://p1.music.126.net/EI5iMG-S6bhxwJxNbr6o1w==/109951164849297357.jpg",
    "length": 210373,
    "artist": [
      {
        "name": "Elysian Fields"
      }
    ],
    "album": "The Afterlife",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171421/a3e5793dc05906204bbdad0a4aca28d2/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8664474803/7a9f/10d1/91c7/8b44b92553d6a5ab6f6608b6de2615a5.m4a?vuutv=qF6AseNQO6Ov4ed5D/JMj98GZrChKqfp59BvnNayUDY/poEWKALqxH51ur05RVODTBj8heSACd2eqt5hKQm7RJ+oWm/VmgkNa9TN2aiDNA0=&authSecret=0000019d716e831619570a32ecb80006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 29451361,
    "name": "Halo (acoustic)",
    "cover": "http://p1.music.126.net/cyG35d728X3LYlNw1LbMAw==/2536573325646941.jpg",
    "length": 244000,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Halo (acoustic) (Single)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 29431066,
    "name": "奇妙能力歌",
    "cover": "http://p2.music.126.net/lN2jt4Vkqw3zzIjc2JjyCw==/2532175280981641.jpg",
    "length": 253133,
    "artist": [
      {
        "name": "陈粒"
      }
    ],
    "album": "未收录的单曲",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171431/767b0ea714c6de55fb8958990c2bb3f1/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/77791071738/ddd2/057a/085d/fb83b06f57acd4f7ba82e9d2a594661f.m4a?vuutv=dCIA5s0HNxKQVFLJEnPmlXghyAu8IgNXwVgtObJMA+ZHXsVeNMKRQPeE+xSXU2JhEctNTNJLCE97/mMxdPbDgJ63OS0cuqjZIe8I+kth7OM=&authSecret=0000019d716ea9bc18c30a32c1bc0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 19038417,
    "name": "Nine Million Bicycles",
    "cover": "http://p1.music.126.net/l-qE0cj1XaCoGxkwwarxfg==/700388906903044.jpg",
    "length": 197160,
    "artist": [
      {
        "name": "Katie Melua"
      }
    ],
    "album": "Nine Million Bicycles",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28280037,
    "name": "Boris",
    "cover": "http://p1.music.126.net/LyTRpJFvmkCsKc4NMZnNow==/17644962602657325.jpg",
    "length": 217840,
    "artist": [
      {
        "name": "Lo-Fang"
      }
    ],
    "album": "Blue Film",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3411353,
    "name": "Vincent (Live)",
    "cover": "http://p1.music.126.net/JHJuQqyPCXHg7QC31CoKAg==/109951165317644412.jpg",
    "length": 321666,
    "artist": [
      {
        "name": "Sara K."
      }
    ],
    "album": "Are We There Yet?",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1475363,
    "name": "Nobody Loves You (When You're Down And Out)",
    "cover": "http://p2.music.126.net/aJSDGuGxvTBf8cG4nDhuYA==/109951163122961163.jpg",
    "length": 303266,
    "artist": [
      {
        "name": "John Lennon"
      }
    ],
    "album": "Wonsaponatime",
    "fee": 8,
    "url": ""
  },
  {
    "id": 22088971,
    "name": "Workingman's Blues #2",
    "cover": "http://p2.music.126.net/VnvUEMn5wJ_eYTtuoKEeog==/109951165992467338.jpg",
    "length": 367000,
    "artist": [
      {
        "name": "Bob Dylan"
      }
    ],
    "album": "Modern Times",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171444/effafee08e9e8b906c484b2c72ae8ccd/jdyyaac/015e/0752/035c/6410c6f2ad08ac28224a46567a78f7aa.m4a?vuutv=8VpKRWgjuSe4xA79rUxjqq6jn7V8DLCbWUiCdlzgBQSRcTRzoIhlgggRpLNGNwOCbAORmYIkEGE3nOvj/RdinHnV9ky5uazOQGMpNORIFbw=&authSecret=0000019d716edd3a0d750a64e2aa0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 26511658,
    "name": "Ship In The Sand",
    "cover": "http://p2.music.126.net/mCTfoqjSbdsAgOd-6HdWCA==/109951168478835307.jpg",
    "length": 217644,
    "artist": [
      {
        "name": "Marble Sounds"
      }
    ],
    "album": "Dear Me, Look Up",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28660019,
    "name": "Black Beauty",
    "cover": "http://p2.music.126.net/09q4e_zFRrfcxLAFYPDGfA==/109951167264500208.jpg",
    "length": 314533,
    "artist": [
      {
        "name": "Lana Del Rey"
      }
    ],
    "album": "Ultraviolence (Deluxe Version)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171456/0c022cbe7d2b25319888197a1007ee4d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19418148555/d7f4/8394/933a/7e82d2f2ba96051d4e788eafc76b29e8.m4a?vuutv=XyAhZwry9nqlft/qE3g/d31G6xwDQX+o9qMa+BwAQBwAcIFKL5S6sIVdQeQO6BvIAnzdeKPEHm+uTR/S7PHI+ZicKGP5SMJI82uWwdY2flA=&authSecret=0000019d716f0be411a70a3262760006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 27506485,
    "name": "Devastate Me",
    "cover": "http://p2.music.126.net/v0LUB1qtJFJtVDNK9sIw2g==/109951163655915544.jpg",
    "length": 261020,
    "artist": [
      {
        "name": "Rachael Yamagata"
      }
    ],
    "album": "The Noise Trade Loft Sessions Mixtape and More",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20703834,
    "name": "Beautiful Girl",
    "cover": "http://p2.music.126.net/gyDW5Esuc1JjIZyD7gMHHg==/746568395270973.jpg",
    "length": 158229,
    "artist": [
      {
        "name": "William Fitzsimmons"
      }
    ],
    "album": "Beautiful Girl",
    "fee": 0,
    "url": ""
  },
  {
    "id": 18611532,
    "name": "A Beautiful Mess",
    "cover": "http://p2.music.126.net/Fn_MpenKqimIjYcX4okVHA==/109951168592947035.jpg",
    "length": 337840,
    "artist": [
      {
        "name": "Jason Mraz"
      }
    ],
    "album": "We Sing. We Dance. We Steal Things. (Bonus Tracks Version)",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171505/d7c0a1332eea438a7c34fe94b3747d68/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/17150177686/0766/4599/5719/8f3f4a6108bdabafb834aa75436527ae.m4a?vuutv=BoOA6W40UYbW0kVev85JwcqPLNjQsQ6m7MvEooosTztj8UxriU8ktFYfsNrsTuBhwDIJEeut5JiyrIZpGEbrcFpBykvpVIotdXud1xeXrHQ=&authSecret=0000019d716f300017ab0a3b1b6d10ff&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28577864,
    "name": "All of Me (feat. Madilyn Bailey)",
    "cover": "http://p1.music.126.net/vEhcPPqfR-4-et8VTZXylA==/6009930557834824.jpg",
    "length": 271000,
    "artist": [
      {
        "name": "Jason Chen"
      },
      {
        "name": "MADILYN"
      }
    ],
    "album": "All of Me- Single",
    "fee": 0,
    "url": ""
  },
  {
    "id": 18618251,
    "name": "Someone Told Me",
    "cover": "http://p2.music.126.net/9nf21Ch9o-Fj7095Pd3WbA==/6627856093173553.jpg",
    "length": 156773,
    "artist": [
      {
        "name": "Jake Bugg"
      }
    ],
    "album": "Jake Bugg",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171519/4fd5e7bc25a6fb1f150ae6a62c9944e7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/26732828826/3234/bbe3/4314/0a1e761fe6de816241892c3c095de8d1.m4a?vuutv=6XxRW8n0/Vp1cFEo2abm8s+XsEoaxXcQmLATKU1JD4Djg2FwUfXRw2mgnHwi6Yqs3dA/hjDywn0wXX1AgThnqoYDbsSzDxWhgos4x9yFK1M=&authSecret=0000019d716f673514350a3b23d72259&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28592013,
    "name": "Slippin'",
    "cover": "http://p1.music.126.net/VrfqySA2WKct-In-6hm3MA==/109951169377382357.jpg",
    "length": 179606,
    "artist": [
      {
        "name": "Taylor Thrash"
      }
    ],
    "album": "Step Forward",
    "fee": 8,
    "url": ""
  },
  {
    "id": 16607021,
    "name": "Better Off",
    "cover": "http://p2.music.126.net/yWm5cCPPiNC73WSdpVL05A==/109951163371555445.jpg",
    "length": 172800,
    "artist": [
      {
        "name": "Lindsey Ray"
      }
    ],
    "album": "Goodbye From California",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28525829,
    "name": "Last Train",
    "cover": "http://p2.music.126.net/KrLo9Kp2-MHFQdNOPOUoQA==/109951168556415787.jpg",
    "length": 222520,
    "artist": [
      {
        "name": "Dawn Golden"
      }
    ],
    "album": "Still Life",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171529/2c49a76f7fe4a69c36aab18ba80879d7/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28910880707/b5db/e678/bc44/9cf4a46d48d8890d444b705abf32ba7e.m4a?vuutv=y/v7cg1K/Tzn8AYoyZjm+e/9ElvUH/soD7w/yNd26yjd446Heu81p9W4TS0MwAGnwb0m99GW80KpTvqmTuMUCjSubKPTbF6xqiiZRjx9YAg=&authSecret=0000019d716f8da40dd50a329be00006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 3314336,
    "name": "Hazy (Featuring William Fitzsimmons)",
    "cover": "http://p2.music.126.net/qO_cdKxNVEI9PZEi2BNk1w==/1779009813747598.jpg",
    "length": 235960,
    "artist": [
      {
        "name": "Rosi Golan"
      }
    ],
    "album": "Gypsies & Drifters",
    "fee": 0,
    "url": ""
  },
  {
    "id": 29950503,
    "name": "One and Only",
    "cover": "http://p2.music.126.net/9Eq6bI84E6P4yd7HQMpq1A==/109951167832530147.jpg",
    "length": 223598,
    "artist": [
      {
        "name": "Joshua Radin"
      }
    ],
    "album": "Onward and Sideways",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409171538/2a2c4072fb630b80e1320e5a3db9bdd2/yyaac/obj/wonDkMOGw6XDiTHCmMOi/1982596121/caac/cd4d/d93b/b335466115826e2f5223da05b3497357.m4a?vuutv=PRw96gFuwDiYOFk0UFYyJXUwGdkwovKfBFlZaUlUEGDBu4KBRBWLkW+reinoiha/ETMzWb6wcDTwwEweQVAMltxCE187VyaQ76obXno4RUU=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 5133273,
    "name": "Yellow",
    "cover": "http://p2.music.126.net/mMt3SVJtzTRyBVYGtYXPyg==/109951170379855735.jpg",
    "length": 246125,
    "artist": [
      {
        "name": "Jem"
      }
    ],
    "album": "Sweetheart: Our Favorite Artists Sing Their Favorite Love Songs",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171547/ede0839911ce964a1e34504a750c3cad/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34286829656/a79e/d776/40bf/a0c2b543b6b8461fb6105f7d4d568711.m4a?vuutv=ryw+pbEJ3rx2EPwNdS0wuvtTe7KIlKje1HOojugDaa62kJM9+KAt/esN9pyl8doxuE5rhdvYFD+8GlvQTLquPYrO3TdrMk0X86JU5awTsHg=&authSecret=0000019d716fd3b410610a3b21181c59&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 3069853,
    "name": "Oysters",
    "cover": "http://p2.music.126.net/-F0910O9S89-RteLLp9kyg==/109951163908489239.jpg",
    "length": 160213,
    "artist": [
      {
        "name": "Meshell Ndegeocello"
      }
    ],
    "album": "Weather",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171554/d777d681bea1b60a84c8373819c12edc/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4510077202/6ae5/c429/62e6/e7d546ccadde72a4d1887c7d3610e8f6.m4a?vuutv=DF83A8RCPW7xTpZg6A9jirYUHY5W9G9b14/sHaLmXWAStB8IDWXsKODjv5WzIxP46lzH+KAZxE6D4fJ3ua0c6AB9wQE0H2UswY2q0/vgv9U=&authSecret=0000019d716ff0ea17f40aaf7e550006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 20978387,
    "name": "Popeye",
    "cover": "http://p2.music.126.net/DTIueopfXuyLYFuCG2vyMg==/109951168843137664.jpg",
    "length": 378480,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "OH (ohio)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26734315,
    "name": "Theone",
    "cover": "http://p2.music.126.net/bpftxsuz1PbA67aNRX3IWA==/5659186348248398.jpg",
    "length": 293000,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "Another Country: Songs of Dignity & Redemption from the Other Side of the Tracks",
    "fee": 0,
    "url": ""
  },
  {
    "id": 17950534,
    "name": "Song for Evangeline",
    "cover": "http://p1.music.126.net/4I1X8iIa4Zrp0RrXQN1wvA==/109951170436179363.jpg",
    "length": 265533,
    "artist": [
      {
        "name": "Pajaro Sunrise"
      }
    ],
    "album": "Old Goodbyes",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26343110,
    "name": "My My Love",
    "cover": "http://p2.music.126.net/oINmFeX6Iu3PpVw7qxl_QQ==/109951164851161061.jpg",
    "length": 226982,
    "artist": [
      {
        "name": "Joshua Radin"
      }
    ],
    "album": "Wax Wings",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171606/bc172d75a05e3f83a9adf39e0a6ca69c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8697271373/1f30/96f2/aab1/28a41c9dd965a3ba77035f65acfa39f2.m4a?vuutv=NLlHR58WnzqFtClObPE2ZSElP464ZMtseyv33pJOVT5d0ybqOoWAWqqODcbFpksYvo/5HoLdK2GaWbVEUl0Zf/OLjSt9Dojo7Vwm4csBCqo=&authSecret=0000019d71701ef91e140a3b1b96041f&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 27757335,
    "name": "Morning Light",
    "cover": "http://p2.music.126.net/z23NPDPu20HnpVcaSnS0oA==/5743848743601552.jpg",
    "length": 331000,
    "artist": [
      {
        "name": "The Hunts"
      }
    ],
    "album": "We Were Young",
    "fee": 0,
    "url": ""
  },
  {
    "id": 21698673,
    "name": "Memory loves you",
    "cover": "http://p2.music.126.net/QciqgWMokd16U7VfVCXX1w==/109951172132039808.jpg",
    "length": 178584,
    "artist": [
      {
        "name": "Sophie Zelmani"
      }
    ],
    "album": "Memory Loves You",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171619/8258553b7d08047a47114f4d84964e3b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32047724641/572b/5eef/7bed/8ee91d71f8f5a106362c35bc1257e6bb.m4a?vuutv=zEJ9cO8gEKhmaqkXz+JyO9bg8oAOAf2BWpy18J9me9c2cNfa9InKyh+DH3mnTNBPOytgbCNw37tDmx6D5OVfeTe5pDENzDckdv0o7x2Bt8U=&authSecret=0000019d71704f7218970aaf64ed0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 21698727,
    "name": "Precious Burden",
    "cover": "http://p1.music.126.net/5D0VKtIS0JMMYdjfTN53Ug==/109951165993008655.jpg",
    "length": 210047,
    "artist": [
      {
        "name": "Sophie Zelmani"
      }
    ],
    "album": "Precious Burden",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171629/f27794ecf8d38428b492a9e9b5dac2aa/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32047723702/0ab0/b20e/860c/c87c8b5865a73461919b529509bd0bc5.m4a?vuutv=Rz2ag7P/2+4Lp6J2rA3ow97J55OhHZ34nKDNgRxK76yyVhON1WOfk1kb7gscw9NOBExn++jW2YIKwfwtI/CA6BBIXGBgrDRDSE0rauycUT8=&authSecret=0000019d71707811123b0a64936b0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 21698712,
    "name": "Dreamer",
    "cover": "http://p1.music.126.net/oTHMuZ9m7qRdPpUPnlxo7g==/109951165993053730.jpg",
    "length": 269630,
    "artist": [
      {
        "name": "Sophie Zelmani"
      }
    ],
    "album": "Time To Kill",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171638/accf1a5db854157e6bb8a721ae556803/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32367229846/fb95/7591/ffc3/780c3497fdf5134e77f1884f7acd4ec1.m4a?vuutv=WPrF5rocQGPbA7PmRRR4pOj+0sYR1H5jsboHGX/EIol9Bzwxs9G07nz+qwOloDywBH+cKG4QuuMKhlsZ2HB/NO/QKsU858MHxD8w0xOk+rY=&authSecret=0000019d71709bae159c0aaf71520006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 1933598,
    "name": "Roses and Gold",
    "cover": "http://p2.music.126.net/ZnkkXSzM-OGDo6tJmB9Btg==/109951165797212871.jpg",
    "length": 317275,
    "artist": [
      {
        "name": "Robin Jackson"
      }
    ],
    "album": "Dust Diaries",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20703784,
    "name": "It's Not True",
    "cover": "http://p2.music.126.net/OxdS-8jYtkJZG7wuGBml_A==/109951164852419952.jpg",
    "length": 289384,
    "artist": [
      {
        "name": "William Fitzsimmons"
      }
    ],
    "album": "Goodnight",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171649/01d8211c0ea2507bbec4702f858d8fd3/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8696872592/df9f/4bbc/06b9/686f4ca85ac21b8a9c0261fdbbfeea30.m4a?vuutv=/qoEwNQNHqt+sAVSUkTU8zqgyS+MAXgaCSWlZ0RviDrAlCrML4KRJRwOYvtTDhAIewpAUYMH77aU1LBem4Tg8fe5xVb0foDmm5dkwQQDbJs=&authSecret=0000019d7170c4bc0fca0a3b225c26a7&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 26505369,
    "name": "Talk",
    "cover": "http://p2.music.126.net/FkNdzTy_2hqq6OIwh068cw==/109951165967524384.jpg",
    "length": 268422,
    "artist": [
      {
        "name": "Kodaline"
      }
    ],
    "album": "In A Perfect World",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171659/61e59febd5a9d1c4f6e8cb92a425beb0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32048754099/f958/e65a/1dfe/0663e75ae1b1103470a9fc1185b8c476.m4a?vuutv=GFbleDfcd3y5xvxlGD5a88lxOk41k/SBfbToC+YeOszj10XlPQr8qeR1KzSf1qEISMoIJAjIB+PtTP680xK5thalyVUNhK4S9ZFkW1wEj3M=&authSecret=0000019d7170ee500f180a3b1b9407bb&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 16341459,
    "name": "Skipping Stone",
    "cover": "http://p2.music.126.net/f8H12jHQf9bqoiEhaHNlGg==/109951168005542748.jpg",
    "length": 139737,
    "artist": [
      {
        "name": "Amos Lee"
      }
    ],
    "album": "Supply And Demand",
    "fee": 1,
    "url": "https://m704.music.126.net/20260409171708/5f5a86bb5644044f407ebdefba77e69d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/32620396416/fe54/ad36/430e/a6a38246d608e06e39e5855e65e0ee4f.m4a?vuutv=yXg8gf96Kwje+8u+8aZPkddJUbzavbcVZTPylRQk1a0TOOnlra/fq8oNaLjdsfN6yoh+uFequUcrsdO6jhcp9xwXNo0C9aLZSTfYY7PmnoY=&authSecret=0000019d717110cd18b20a64ca5d0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 28875325,
    "name": "When You Sleep",
    "cover": "http://p2.music.126.net/dZ271o_ghHWQQPge52-4Dg==/109951166273931755.jpg",
    "length": 228022,
    "artist": [
      {
        "name": "Mary Lambert"
      }
    ],
    "album": "Heart On My Sleeve",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171719/b8d48c1348cd67efc0a692f339ea6ed5/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/19635546788/5b37/067a/d9bd/0c79c81e1f5d06d73a2061b2d161b770.m4a?vuutv=UyqafB9KZ15+dn3tEqzckWXa6u2MVNmDgj6gQQ62xjv6txM4HpvaZv8XGKU80FYXBnrsiMDvTYiDS/T6PBioxSm61sq2ouIEQW+oiSlnfyo=&authSecret=0000019d71713bbc1d180a32bcd20006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 20011259,
    "name": "Your Hands",
    "cover": "http://p1.music.126.net/aeZq5psmtryoE6Q6RejWHA==/6627856093173548.jpg",
    "length": 220000,
    "artist": [
      {
        "name": "JJ Heller"
      }
    ],
    "album": "Painted Red",
    "fee": 0,
    "url": ""
  },
  {
    "id": 3025202,
    "name": "Summertime Sadness",
    "cover": "http://p2.music.126.net/TJjjK6ai68IhvN04ZxJmTg==/109951163077703748.jpg",
    "length": 264034,
    "artist": [
      {
        "name": "Lana Del Rey"
      }
    ],
    "album": "Summertime Sadness",
    "fee": 0,
    "url": ""
  },
  {
    "id": 441552,
    "name": "奇迹の山 (Kisekino Yama)",
    "cover": "http://p2.music.126.net/nJEqNZlqEu5bM3eUU-2FDQ==/109951167690855463.jpg",
    "length": 269609,
    "artist": [
      {
        "name": "岸部眞明"
      }
    ],
    "album": "奇跡の山",
    "fee": 1,
    "url": "https://m10.music.126.net/20260409171730/51f11854a2aa86314af78099e4c7d5b7/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2907444495/23cf/0a6a/98d0/72e2fdeb334ae695643cca6f9ae3663b.m4a?vuutv=kFVh74RVylynQIGv1J3avyskglqX5pbP9uJbZAr2UUAY681k240n7GbTf8VbXYT5omLIsLTsSxnC5+zsm7O2xanCcah57HfchLZgKONiQ/4=&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 18449202,
    "name": "You And Me",
    "cover": "http://p1.music.126.net/ZySzF8hcT9LQmRZurKOz5A==/109951163822390996.jpg",
    "length": 124026,
    "artist": [
      {
        "name": "Rosie Thomas"
      }
    ],
    "album": "Only With Laughter Can You Win",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20952203,
    "name": "I Giorni",
    "cover": "http://p1.music.126.net/To-dJ8xqIOija1ty2vU-fw==/109951169070245739.jpg",
    "length": 359213,
    "artist": [
      {
        "name": "Ludovico Einaudi"
      }
    ],
    "album": "I Giorni",
    "fee": 1,
    "url": "https://m804.music.126.net/20260409171744/5b0ff1a7787ef9ea2539e0dfd9bf1381/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/29924424014/ec0f/7d47/a95b/8ee0ec0828949789cb8d1fc3a70ecb2c.m4a?vuutv=dGg87mBNZ92GVeSORDh0iOI692x2fYnfGR7Sf4I6LqgdSeArpv2fq1y+XDg9wspvACqmevmHN/ymA48KLSKlRIf8QSx/nJWSgIVt/wDzoKw=&authSecret=0000019d71719ba61b470a32530c0006&cdntag=bWFyaz1vc193ZWIscXVhbGl0eV9leGhpZ2g"
  },
  {
    "id": 16766469,
    "name": "The Coast No Man Can Tell",
    "cover": "http://p2.music.126.net/f0lHOeAeWfPEdpLG4fqglQ==/109951163470679674.jpg",
    "length": 186640,
    "artist": [
      {
        "name": "Bill Fay"
      }
    ],
    "album": "Life Is People",
    "fee": 8,
    "url": ""
  }
]; */

const songs = [
  {
    "id": 2000729734,
    "name": "日记",
    "cover": "http://p1.music.126.net/_Qx6Z7LrQKSECUHGfIjAmA==/109951168082083693.jpg",
    "length": 244590,
    "artist": [
      {
        "name": "刘弈画"
      }
    ],
    "album": "2022",
    "fee": 0,
    "url": ""
  },
  {
    "id": 452601866,
    "name": "This Is The Walk",
    "cover": "http://p2.music.126.net/YIFLoDfpwh7gLL4L3CLkuQ==/18719185464601601.jpg",
    "length": 210000,
    "artist": [
      {
        "name": "David O'Dowda"
      }
    ],
    "album": "Look Up",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1358035401,
    "name": "Fallen",
    "cover": "http://p2.music.126.net/HqwTJjN8kCX4Nd9q7YJ_uQ==/109951163990765878.jpg",
    "length": 321492,
    "artist": [
      {
        "name": "Gert Taberner"
      }
    ],
    "album": "Fallen",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1871038669,
    "name": "when i was young",
    "cover": "http://p2.music.126.net/TC_gah7n9eLclV341UKtFA==/109951166302143010.jpg",
    "length": 208285,
    "artist": [
      {
        "name": "Flora Cash"
      }
    ],
    "album": "our generation",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1304791584,
    "name": "Won't Let You Go",
    "cover": "http://p2.music.126.net/s9eemm1dlwb1gg67tQ_J1A==/109951170196953737.jpg",
    "length": 256966,
    "artist": [
      {
        "name": "Benjamin Ian Cocks"
      },
      {
        "name": "Mo Brandis"
      }
    ],
    "album": "Twenty Something Songs, Vol. 5",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3354884940,
    "name": "风 (一切都像风)",
    "cover": "http://p2.music.126.net/IHHaB6X00VqFW7z35NzWBg==/109951172827084732.jpg",
    "length": 237508,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "风 (一切都像风)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2749424397,
    "name": "自然环境",
    "cover": "http://p2.music.126.net/d2H0OYy8yuphfVj06KBfkg==/109951172059151771.jpg",
    "length": 244288,
    "artist": [
      {
        "name": "陈粒"
      }
    ],
    "album": "贴近大地",
    "fee": 8,
    "url": ""
  },
  {
    "id": 18499438,
    "name": "All at Sea",
    "cover": "http://p1.music.126.net/dvOdVCHIj92l9gvQJPOFeQ==/109951167598524133.jpg",
    "length": 197813,
    "artist": [
      {
        "name": "Richard Walters"
      }
    ],
    "album": "The Animal",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1909668621,
    "name": "无数与自我对话的深夜",
    "cover": "http://p2.music.126.net/mZWib1GiML12Cfaw1Kv15w==/109951166898347494.jpg",
    "length": 188736,
    "artist": [
      {
        "name": "什么都浪漫"
      }
    ],
    "album": "无数与自我对话的深夜",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2697656415,
    "name": "亲爱的你啊",
    "cover": "http://p2.music.126.net/s0D6UTU1YUtMcOCtwKHaRA==/109951170776174055.jpg",
    "length": 235750,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "亲爱的你啊",
    "fee": 8,
    "url": ""
  },
  {
    "id": 458496083,
    "name": "阿婆说",
    "cover": "http://p2.music.126.net/X12webjUcU41f7FY6BvZmQ==/18549860673982254.jpg",
    "length": 241333,
    "artist": [
      {
        "name": "暗杠"
      }
    ],
    "album": "阿婆说",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26387357,
    "name": "女人的秘密",
    "cover": "http://p1.music.126.net/QJYb5PP_YtSU8yeopkMnWg==/109951163077573267.jpg",
    "length": 280200,
    "artist": [
      {
        "name": "曾轶可"
      }
    ],
    "album": "会飞的贼",
    "fee": 8,
    "url": ""
  },
  {
    "id": 340391,
    "name": "还能孩子多久",
    "cover": "http://p1.music.126.net/u99fHXGn85d8TLjYbPVuUA==/109951163105662267.jpg",
    "length": 273040,
    "artist": [
      {
        "name": "曾轶可"
      }
    ],
    "album": "Forever Road",
    "fee": 8,
    "url": ""
  },
  {
    "id": 499943147,
    "name": "礼物",
    "cover": "http://p2.music.126.net/0gRsdYR0ixDnbUO73DjcvA==/109951163004879466.jpg",
    "length": 254066,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Demo2016",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2637730685,
    "name": "关于思念",
    "cover": "http://p1.music.126.net/edi-ZdbfKiyJvNjm7r_dgQ==/109951170054112906.jpg",
    "length": 214903,
    "artist": [
      {
        "name": "Max李玄"
      }
    ],
    "album": "关于思念",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2161595973,
    "name": "闹哄哄",
    "cover": "http://p2.music.126.net/kvLJTxdPruRHJzHWQU_FXA==/109951169638607277.jpg",
    "length": 246754,
    "artist": [
      {
        "name": "怪枝"
      }
    ],
    "album": "闹哄哄",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2637203435,
    "name": "一个人生活",
    "cover": "http://p2.music.126.net/F5ZdSrueSiz8Va6PJxyjYw==/109951170049357913.jpg",
    "length": 221056,
    "artist": [
      {
        "name": "徐化文（四熹丸子）"
      }
    ],
    "album": "一个人生活",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1915248264,
    "name": "蝴蝶飞呀 + 红蜻蜓",
    "cover": "http://p2.music.126.net/8K6PNnj9TUmW4xZDPgCKww==/109951166982791338.jpg",
    "length": 213850,
    "artist": [
      {
        "name": "房东的猫"
      }
    ],
    "album": "我们的村晚2022",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2625929157,
    "name": "窗外小雨",
    "cover": "http://p2.music.126.net/8dctyJ_sfpm13IqBThDBuA==/109951169950782317.jpg",
    "length": 217833,
    "artist": [
      {
        "name": "徐化文（四熹丸子）"
      }
    ],
    "album": "窗外小雨",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19468098,
    "name": "Rococo Zephyr",
    "cover": "http://p1.music.126.net/97mU-SZj90Pm-n2fWAypNA==/109951163371678611.jpg",
    "length": 342746,
    "artist": [
      {
        "name": "Bill Callahan"
      }
    ],
    "album": "Sometimes I Wish We Were an Eagle",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2626250855,
    "name": "你是我最喜欢的人类",
    "cover": "http://p2.music.126.net/EKzP2iLn1KHFB9-Nfrp0-w==/109951170098051017.jpg",
    "length": 224000,
    "artist": [
      {
        "name": "杨英格"
      },
      {
        "name": "魏如萱"
      },
      {
        "name": "DAYDREAM"
      }
    ],
    "album": "Bare Daydream",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2043350928,
    "name": "If A Tree Falls",
    "cover": "http://p1.music.126.net/7LGCyq7oyQB0zof7KzaGLA==/109951168577126073.jpg",
    "length": 181826,
    "artist": [
      {
        "name": "Sophie Rose"
      }
    ],
    "album": "If A Tree Falls",
    "fee": 8,
    "url": ""
  },
  {
    "id": 571340767,
    "name": "人妻的伪术",
    "cover": "http://p1.music.126.net/TkmQ2rkSxzqbu3_t_mU6ow==/109951163351492408.jpg",
    "length": 277758,
    "artist": [
      {
        "name": "谢安琪"
      }
    ],
    "album": "人妻的伪术",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2132789169,
    "name": "Good Enough",
    "cover": "http://p2.music.126.net/cNJTepxmQoq349gRJlKNFQ==/109951169389202329.jpg",
    "length": 199426,
    "artist": [
      {
        "name": "Sasha Alex Sloan"
      }
    ],
    "album": "Me Again",
    "fee": 8,
    "url": ""
  },
  {
    "id": 256470,
    "name": "远走高飞",
    "cover": "http://p1.music.126.net/DfnBpCXPY-JgoRAJxLoolw==/109951171530798085.jpg",
    "length": 227000,
    "artist": [
      {
        "name": "林忆莲"
      }
    ],
    "album": "属于我的林忆莲",
    "fee": 8,
    "url": ""
  },
  {
    "id": 569200212,
    "name": "一荤一素",
    "cover": "http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg",
    "length": 281346,
    "artist": [
      {
        "name": "毛不易"
      }
    ],
    "album": "平凡的一天",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2099317936,
    "name": "It's All Gone",
    "cover": "http://p1.music.126.net/APQOYXcwHUJ3BI1ttT1P3Q==/109951169052410840.jpg",
    "length": 287463,
    "artist": [
      {
        "name": "The Wanderer"
      }
    ],
    "album": "It's All Gone",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1350364644,
    "name": "和解",
    "cover": "http://p1.music.126.net/DCTHgNSrKPx8blqnIxHdpw==/109951165525111574.jpg",
    "length": 294656,
    "artist": [
      {
        "name": "陶峻汐"
      }
    ],
    "album": "无人问津",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2103689933,
    "name": "大儿歌",
    "cover": "http://p2.music.126.net/5qaQJZhKxKTarmf37SSXnQ==/109951169102132144.jpg",
    "length": 184632,
    "artist": [
      {
        "name": "任素汐"
      },
      {
        "name": "张弛"
      }
    ],
    "album": "大儿歌",
    "fee": 8,
    "url": ""
  },
  {
    "id": 25638368,
    "name": "蓝天",
    "cover": "http://p2.music.126.net/L_yLyZAC7z17EVNxfKovXQ==/888405395278456.jpg",
    "length": 192933,
    "artist": [
      {
        "name": "追星族"
      },
      {
        "name": "郭柯宇"
      }
    ],
    "album": "直到对的人来",
    "fee": 0,
    "url": ""
  },
  {
    "id": 521493357,
    "name": "No One Told Me Why",
    "cover": "http://p2.music.126.net/inyPdZPBmjuS2p5R2HRt_Q==/109951163073808926.jpg",
    "length": 250850,
    "artist": [
      {
        "name": "ALEPH"
      }
    ],
    "album": "레코드팜 컴필레이션 앨범",
    "fee": 0,
    "url": ""
  },
  {
    "id": 25638375,
    "name": "直到对的人来",
    "cover": "http://p2.music.126.net/L_yLyZAC7z17EVNxfKovXQ==/888405395278456.jpg",
    "length": 260253,
    "artist": [
      {
        "name": "追星族"
      },
      {
        "name": "郭柯宇"
      }
    ],
    "album": "直到对的人来",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1908002466,
    "name": "好的 晚安",
    "cover": "http://p2.music.126.net/RebQ9DeJC6XIFOeIAnYMYg==/109951166870966855.jpg",
    "length": 248493,
    "artist": [
      {
        "name": "邓见超"
      }
    ],
    "album": "好的 晚安",
    "fee": 8,
    "url": ""
  },
  {
    "id": 437752105,
    "name": "你的拥抱",
    "cover": "http://p2.music.126.net/ySsqeQTdlX6DTLbCnLd2Vg==/17671350881980744.jpg",
    "length": 224064,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "三温暖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 79938,
    "name": "If",
    "cover": "http://p2.music.126.net/niuSQYKmtHcNp3UiSi_UpQ==/109951172952715730.jpg",
    "length": 151680,
    "artist": [
      {
        "name": "丁可"
      }
    ],
    "album": "Island",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1888631655,
    "name": "棉湖",
    "cover": "http://p2.music.126.net/Dai7XYXh0qsA-Eot91FujQ==/109951166540853684.jpg",
    "length": 258260,
    "artist": [
      {
        "name": "暗杠"
      }
    ],
    "album": "棉湖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1838919030,
    "name": "王招君",
    "cover": "http://p2.music.126.net/d_AC9BDLrl98XyLDWrfbWg==/109951169311058334.jpg",
    "length": 255146,
    "artist": [
      {
        "name": "任素汐"
      }
    ],
    "album": "TA·说",
    "fee": 8,
    "url": ""
  },
  {
    "id": 17800984,
    "name": "Hushing",
    "cover": "http://p1.music.126.net/lZLaG5iDLZ_autIXRBHgFg==/17934134160919801.jpg",
    "length": 409887,
    "artist": [
      {
        "name": "From Your Balcony"
      }
    ],
    "album": "The leaver and the left",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28836060,
    "name": "風",
    "cover": "http://p1.music.126.net/WfxODD6hCW210yUs3MmU7g==/5965950092818102.jpg",
    "length": 218000,
    "artist": [
      {
        "name": "Priscilla Ahn"
      }
    ],
    "album": "プリシラ・アーン・ベスト",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1447803278,
    "name": "Dawning of Spring",
    "cover": "http://p2.music.126.net/wwFpf0rR5Vie_5AofRsDzQ==/109951165932515768.jpg",
    "length": 257454,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Songs I Wrote in My Bedroom",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28953336,
    "name": "Days Like This",
    "cover": "http://p2.music.126.net/z8ynh1lJr0rnv6PJemTqPw==/109951163073379170.jpg",
    "length": 223500,
    "artist": [
      {
        "name": "Kim Taylor"
      }
    ],
    "album": "The Greatest Story",
    "fee": 8,
    "url": ""
  },
  {
    "id": 64116,
    "name": "Baby Song",
    "cover": "http://p1.music.126.net/Po0tJTtv4aBaYozWlnojHg==/18546562139313276.jpg",
    "length": 198506,
    "artist": [
      {
        "name": "陈奕迅"
      }
    ],
    "album": "？",
    "fee": 8,
    "url": ""
  },
  {
    "id": 521418666,
    "name": "Come A Long Way",
    "cover": "http://p2.music.126.net/tbxmmyrrV8xUt7CxvTAADA==/109951163077229685.jpg",
    "length": 275733,
    "artist": [
      {
        "name": "Kim Taylor"
      }
    ],
    "album": "I've Come A Long Way",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1464505526,
    "name": "Let's Fall in Love for the Night (1964)",
    "cover": "http://p2.music.126.net/mOddmPYMbdWkgiZBmVoW4A==/109951169157437471.jpg",
    "length": 240000,
    "artist": [
      {
        "name": "FINNEAS"
      }
    ],
    "album": "Blood Harmony (Deluxe)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1861651696,
    "name": "老情歌",
    "cover": "http://p1.music.126.net/TRbI1Y9GMdiTlGpw65Odfg==/109951166353671371.jpg",
    "length": 233888,
    "artist": [
      {
        "name": "刘瑞琦"
      }
    ],
    "album": "以歌为名",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1417400412,
    "name": "同类（cover. 孙燕姿）",
    "cover": "http://p2.music.126.net/ZbqD15ZS_rLjSacYrDydbQ==/109951165528328220.jpg",
    "length": 275800,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Wishroom",
    "fee": 0,
    "url": ""
  },
  {
    "id": 433059340,
    "name": "好好",
    "cover": "http://p2.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 185086,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1864711242,
    "name": "星星对宇宙说",
    "cover": "http://p2.music.126.net/mmHzmpwsk8xbuaW5DoCABQ==/109951172387254024.jpg",
    "length": 285000,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "JG Universe",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1848233480,
    "name": "可惜啊",
    "cover": "http://p2.music.126.net/dOUGyF7KPliuner56Adp0Q==/109951166035751203.jpg",
    "length": 238052,
    "artist": [
      {
        "name": "范倪Liu"
      }
    ],
    "album": "可惜啊",
    "fee": 8,
    "url": ""
  },
  {
    "id": 487115171,
    "name": "Let Me Be Your Love",
    "cover": "http://p2.music.126.net/NMxa8cdscpSR9Qkn0se2Ww==/109951162959155567.jpg",
    "length": 193253,
    "artist": [
      {
        "name": "GREX"
      }
    ],
    "album": "Acoustic Party",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1330625540,
    "name": "Sweet Memories (Cover) (Live Session)（翻自 松田聖子）",
    "cover": "http://p2.music.126.net/oK4id524OEHuFTrdxQnm6A==/109951163683778812.jpg",
    "length": 216810,
    "artist": [
      {
        "name": "Leo1Bee"
      }
    ],
    "album": "This Far 这么远 (Live at 13Club Beijing)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 5248060,
    "name": "达尔文",
    "cover": "http://p2.music.126.net/wbkrh_thnNRkWkXdFJHX_w==/40681930244552.jpg",
    "length": 265106,
    "artist": [
      {
        "name": "蔡健雅"
      }
    ],
    "album": "预见爱情",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1851907936,
    "name": "海马",
    "cover": "http://p2.music.126.net/rLr0nfHUqChmuth2ZSobDA==/109951166073533284.jpg",
    "length": 223832,
    "artist": [
      {
        "name": "曹于漫"
      }
    ],
    "album": "海马",
    "fee": 8,
    "url": ""
  },
  {
    "id": 407435011,
    "name": "我想",
    "cover": "http://p2.music.126.net/O6d7GYY3gp2uy8zehvcOjQ==/17699938184267410.jpg",
    "length": 248125,
    "artist": [
      {
        "name": "余佳运"
      }
    ],
    "album": "幸福三部曲",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1845920151,
    "name": "Magazines",
    "cover": "http://p2.music.126.net/6XWTLa-dFDEv01NgDW213w==/109951165989126422.jpg",
    "length": 220049,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Magazines",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1500569811,
    "name": "阿拉斯加海湾",
    "cover": "http://p1.music.126.net/j9P19hOTNbYxLZDJB9bJag==/109951169385715334.jpg",
    "length": 241043,
    "artist": [
      {
        "name": "蓝心羽"
      }
    ],
    "album": "阿拉斯加海湾",
    "fee": 8,
    "url": ""
  },
  {
    "id": 294052,
    "name": "雪落下的声音",
    "cover": "http://p2.music.126.net/TduTLLgo8gp61mEyWcRdFw==/587139209244496.jpg",
    "length": 259346,
    "artist": [
      {
        "name": "谭维维"
      }
    ],
    "album": "耳界",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1825927405,
    "name": "Siri",
    "cover": "http://p2.music.126.net/2dqzwq-e3Fuy1LukZd3MXQ==/109951165789781180.jpg",
    "length": 223828,
    "artist": [
      {
        "name": "见青"
      },
      {
        "name": "南栖"
      }
    ],
    "album": "Siri",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1815618744,
    "name": "星空",
    "cover": "http://p2.music.126.net/pEE00V0v5_jb9overalgDw==/109951165671181717.jpg",
    "length": 192529,
    "artist": [
      {
        "name": "胥睿"
      }
    ],
    "album": "星空",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1458255434,
    "name": "假装爱过",
    "cover": "http://p2.music.126.net/NP9XSxS9GrER7w43zGtXbQ==/109951165091931478.jpg",
    "length": 240000,
    "artist": [
      {
        "name": "卤蛋老师"
      }
    ],
    "album": "假装爱过",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1366947193,
    "name": "别熬夜了",
    "cover": "http://p2.music.126.net/pa59NC1edofpJyHagCkArQ==/109951164091828628.jpg",
    "length": 175066,
    "artist": [
      {
        "name": "火晚晴"
      }
    ],
    "album": "别了吧",
    "fee": 0,
    "url": ""
  },
  {
    "id": 441622707,
    "name": "十一月的天气",
    "cover": "http://p2.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 264544,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1385911240,
    "name": "开小差（DEMO.）",
    "cover": "http://p1.music.126.net/rkWNHEMAhdVTWMcLDcAt-w==/109951164314097975.jpg",
    "length": 151320,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "开小差",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1806104827,
    "name": "有关于你",
    "cover": "http://p2.music.126.net/BQpLWmbD-3DN5YEflOO7qQ==/109951165557414221.jpg",
    "length": 189038,
    "artist": [
      {
        "name": "李学仕"
      }
    ],
    "album": "有关于你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1359548356,
    "name": "真的很怪荔",
    "cover": "http://p2.music.126.net/k6EzRdvLGqjlSF_ztpbpeQ==/109951164007334086.jpg",
    "length": 174000,
    "artist": [
      {
        "name": "大喜"
      }
    ],
    "album": "真的很怪荔",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1479706965,
    "name": "是你想成为的大人吗",
    "cover": "http://p1.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg",
    "length": 331530,
    "artist": [
      {
        "name": "尤长靖"
      }
    ],
    "album": "AZORAland·我是尤长靖",
    "fee": 8,
    "url": ""
  },
  {
    "id": 5185403,
    "name": "Don't Explain",
    "cover": "http://p2.music.126.net/OPk5YlRq0MN2MXa1CRHFsw==/1782308348635191.jpg",
    "length": 356000,
    "artist": [
      {
        "name": "Angela McCluskey"
      }
    ],
    "album": "Blue Note:A Story of Jazz",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1416680616,
    "name": "昨夜你把星辰投进我梦里",
    "cover": "http://p2.music.126.net/RMTrr53G3Kcg8fpZ9S0LLQ==/109951164626313169.jpg",
    "length": 217166,
    "artist": [
      {
        "name": "漫乐酶"
      },
      {
        "name": "雷智皓"
      }
    ],
    "album": "昨夜你把星辰投进我梦里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1450083773,
    "name": "在你身边就失去超能力",
    "cover": "http://p2.music.126.net/wgbIfO1ikWNYPac8fSgw3g==/109951165007824405.jpg",
    "length": 211898,
    "artist": [
      {
        "name": "刘思鉴"
      }
    ],
    "album": "在你身边就失去超能力",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1406858225,
    "name": "磁场电化学（feat.BlackC）",
    "cover": "http://p2.music.126.net/tft20w2FXardxuW1IRnv5Q==/109951164519846484.jpg",
    "length": 238666,
    "artist": [
      {
        "name": "RUNCII"
      },
      {
        "name": "BlackC"
      }
    ],
    "album": "磁 场 电 化 学",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1396473172,
    "name": "I Can't Sleep (Acoustic Version)",
    "cover": "http://p1.music.126.net/iv-GE5cZA5AGWFLXUcrd0Q==/109951167896029253.jpg",
    "length": 183164,
    "artist": [
      {
        "name": "Olivera"
      }
    ],
    "album": "I Can't Sleep (Acoustic Version)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3884440,
    "name": "Take You Away",
    "cover": "http://p1.music.126.net/qlod1aSKsIPAIf2w1jnnzQ==/1719636185848724.jpg",
    "length": 228640,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Memories of an Old Friend",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1488403784,
    "name": "别说不堪",
    "cover": "http://p1.music.126.net/EEa9dua9dTPw68Aabag9xA==/109951165401945555.jpg",
    "length": 197392,
    "artist": [
      {
        "name": "程安"
      }
    ],
    "album": "别说不堪",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1492319441,
    "name": "自洽",
    "cover": "http://p2.music.126.net/ilhSwYuf1t3_vVu5eU5Pnw==/109951165434590354.jpg",
    "length": 268102,
    "artist": [
      {
        "name": "莫文蔚"
      },
      {
        "name": "郭一凡"
      }
    ],
    "album": "不完美人生指南",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29777652,
    "name": "恋恋风尘 (Demo)",
    "cover": "http://p2.music.126.net/8K2_o5NsmBL_D_m7F3QdXg==/109951163451647857.jpg",
    "length": 257786,
    "artist": [
      {
        "name": "程璧"
      }
    ],
    "album": "恋恋风尘 (Demo)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2057291,
    "name": "I'm Not OK",
    "cover": "http://p2.music.126.net/7n9sU8IYbYKJLx2M2bKG6Q==/1692148395148846.jpg",
    "length": 240349,
    "artist": [
      {
        "name": "Trent Dabbs"
      }
    ],
    "album": "Future Like Snow",
    "fee": 8,
    "url": ""
  },
  {
    "id": 459860065,
    "name": "Heartlines (Acoustic)",
    "cover": "http://p2.music.126.net/GkyW7E3hrTf3ReKSFG_kUw==/730075731104325.jpg",
    "length": 225135,
    "artist": [
      {
        "name": "BROODS"
      }
    ],
    "album": "Heartlines (Acoustic)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1460682363,
    "name": "爱，存在",
    "cover": "http://p1.music.126.net/yZipSHp6XCUqy9l2VybCTQ==/109951165115661793.jpg",
    "length": 282807,
    "artist": [
      {
        "name": "卢卢快闭嘴"
      }
    ],
    "album": "爱，存在",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1434235495,
    "name": "Where The Shadow Ends (Acoustic)",
    "cover": "http://p2.music.126.net/h6hnkKAOyElwYBBD0rGbtw==/109951164843066072.jpg",
    "length": 244833,
    "artist": [
      {
        "name": "BANNERS"
      }
    ],
    "album": "Where The Shadow Ends (Acoustic)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1352884452,
    "name": "光·白",
    "cover": "http://p2.music.126.net/anfeoZ1C_usSz8Y-OBZi5A==/109951164175360059.jpg",
    "length": 290730,
    "artist": [
      {
        "name": "柳爽"
      }
    ],
    "album": "如影",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1418131335,
    "name": "岛屿",
    "cover": "http://p2.music.126.net/5QqPaUiTnTVxB5dZxDX3_Q==/109951165266634946.jpg",
    "length": 302640,
    "artist": [
      {
        "name": "棱镜乐队"
      }
    ],
    "album": "石头想有糖的温度",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1437154102,
    "name": "Lonely Star",
    "cover": "http://p2.music.126.net/i1R6K-SVQdNXgfANLks7yw==/109951165090257278.jpg",
    "length": 237386,
    "artist": [
      {
        "name": "Oh Wonder"
      }
    ],
    "album": "Home Tapes",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1447803268,
    "name": "Don't Forget to Breathe",
    "cover": "http://p2.music.126.net/wwFpf0rR5Vie_5AofRsDzQ==/109951165932515768.jpg",
    "length": 123390,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Songs I Wrote in My Bedroom",
    "fee": 8,
    "url": ""
  },
  {
    "id": 411349945,
    "name": "Can't Help Falling in Love",
    "cover": "http://p2.music.126.net/Hg9SUoSNUdhf-Khu_8Gw7Q==/109951163322263694.jpg",
    "length": 173174,
    "artist": [
      {
        "name": "Haley Reinhart"
      }
    ],
    "album": "Better",
    "fee": 0,
    "url": ""
  },
  {
    "id": 27846868,
    "name": "Almost Lover",
    "cover": "http://p1.music.126.net/315nkTT6DJo_V8ibwvtuLg==/18317863719015086.jpg",
    "length": 262570,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Bundle of Tantrums",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1336864660,
    "name": "fly",
    "cover": "http://p2.music.126.net/XaOsJxPi5p-Rikyn7f3EOA==/109951163825156203.jpg",
    "length": 98037,
    "artist": [
      {
        "name": "vietra"
      }
    ],
    "album": "fly",
    "fee": 8,
    "url": ""
  },
  {
    "id": 482395086,
    "name": "Places We Won't Walk",
    "cover": "http://p2.music.126.net/YYuVRxqTb0hqWvsh6vgqvA==/109951163254082752.jpg",
    "length": 169410,
    "artist": [
      {
        "name": "Bruno Major"
      }
    ],
    "album": "Places We Won't Walk",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1299570089,
    "name": "Umbrella (Electus Remix)",
    "cover": "http://p2.music.126.net/6qgcbIzCealR-aPf8ingGw==/109951163446379253.jpg",
    "length": 249242,
    "artist": [
      {
        "name": "Electus"
      },
      {
        "name": "Ember Island"
      }
    ],
    "album": "Umbrella (Electus Remix)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 479979756,
    "name": "Time",
    "cover": "http://p2.music.126.net/atFhY6cVqdcrqUF6YNbB2Q==/109951163371223791.jpg",
    "length": 244709,
    "artist": [
      {
        "name": "Tom Adams"
      }
    ],
    "album": "Silence",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1371121803,
    "name": "Trying My Best",
    "cover": "http://p2.music.126.net/MjfY6F0H6TvG9isgEwnS4Q==/109951164139884247.jpg",
    "length": 292336,
    "artist": [
      {
        "name": "Anson Seabra"
      }
    ],
    "album": "Trying My Best",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2117228,
    "name": "Chasing Pavements",
    "cover": "http://p1.music.126.net/Bb1iwz9qsACW7t7IYgCe7Q==/109951167841994941.jpg",
    "length": 211173,
    "artist": [
      {
        "name": "Adele"
      }
    ],
    "album": "Chasing Pavements",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1413142894,
    "name": "大眠 (完整版)",
    "cover": "http://p1.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg",
    "length": 184942,
    "artist": [
      {
        "name": "小乐哥（王唯乐）"
      }
    ],
    "album": "大眠 (完整版)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1431995953,
    "name": "Chandelier",
    "cover": "http://p2.music.126.net/UwdPrpbBL3RBqLQFAP_vVg==/109951165016368231.jpg",
    "length": 313520,
    "artist": [
      {
        "name": "Damien Rice"
      }
    ],
    "album": "Chandelier",
    "fee": 8,
    "url": ""
  },
  {
    "id": 468882321,
    "name": "Singur",
    "cover": "http://p2.music.126.net/rnHLMLESV1c-PcFbDgAngg==/18775260557760255.jpg",
    "length": 173267,
    "artist": [
      {
        "name": "Oskar Schuster"
      }
    ],
    "album": "Piano Cloud Series - Vol.1",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1297811542,
    "name": "北木南",
    "cover": "http://p2.music.126.net/GYYAI3pchnod5JCxcKUwUA==/109951163435057408.jpg",
    "length": 212842,
    "artist": [
      {
        "name": "罗永川"
      }
    ],
    "album": "北木南",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1359357928,
    "name": "何必要",
    "cover": "http://p2.music.126.net/l4IVRd08eSPSj6ylxMxgxQ==/109951164005351160.jpg",
    "length": 210204,
    "artist": [
      {
        "name": "邵帅"
      }
    ],
    "album": "解忧",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1377530118,
    "name": "如词穷一般",
    "cover": "http://p2.music.126.net/nanSNquiH8LUWypFIGshVw==/109951164208977739.jpg",
    "length": 269774,
    "artist": [
      {
        "name": "于娜懿"
      }
    ],
    "album": "此致那个敬礼",
    "fee": 8,
    "url": ""
  },
  {
    "id": 574288806,
    "name": "风",
    "cover": "http://p1.music.126.net/9q9NKCkgqyJi7UFBMrdQ4Q==/109951163368328268.jpg",
    "length": 230607,
    "artist": [
      {
        "name": "胡桑"
      }
    ],
    "album": "风",
    "fee": 8,
    "url": ""
  },
  {
    "id": 404784579,
    "name": "繁华",
    "cover": "http://p1.music.126.net/H0zkg_xTwqQGooEr_ytgpg==/1422768048326458.jpg",
    "length": 225856,
    "artist": [
      {
        "name": "过又嘉"
      }
    ],
    "album": "繁华",
    "fee": 8,
    "url": ""
  },
  {
    "id": 494731329,
    "name": "杂草",
    "cover": "http://p2.music.126.net/sz345URTkaHJNut6OtzYMw==/109951162985834142.jpg",
    "length": 323437,
    "artist": [
      {
        "name": "子明"
      }
    ],
    "album": "错在雾里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1363883359,
    "name": "你之外",
    "cover": "http://p2.music.126.net/GKkEo1otmAva2g6pZ5Gl3Q==/109951164058189031.jpg",
    "length": 208181,
    "artist": [
      {
        "name": "小嘉玲"
      }
    ],
    "album": "情歌两三首",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1297750769,
    "name": "有人",
    "cover": "http://p2.music.126.net/Q14TNDAXb8DnXTl08wZD7Q==/109951163440240805.jpg",
    "length": 254085,
    "artist": [
      {
        "name": "赵钶"
      }
    ],
    "album": "有人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 424498733,
    "name": "我喜欢的人都跟你好像",
    "cover": "http://p2.music.126.net/JRLLsTgiCOH-2pJs6GmoEg==/18262888137781891.jpg",
    "length": 261632,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "我喜欢的人都跟你好像",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1376166020,
    "name": "你也没有错",
    "cover": "http://p2.music.126.net/-AGvLyK-uP_9NPwrvr1XDA==/109951164194813269.jpg",
    "length": 294737,
    "artist": [
      {
        "name": "王贰浪"
      }
    ],
    "album": "你也没有错",
    "fee": 8,
    "url": ""
  },
  {
    "id": 516094487,
    "name": "生活又不是热血动漫",
    "cover": "http://p2.music.126.net/BcKfvptsgiGMXzI7WodARA==/109951163100187917.jpg",
    "length": 248146,
    "artist": [
      {
        "name": "尚东峰"
      }
    ],
    "album": "生活又不是热血动漫",
    "fee": 8,
    "url": ""
  },
  {
    "id": 546723319,
    "name": "愿你",
    "cover": "http://p1.music.126.net/vEmhALkO4a5VdVqpGKipgw==/109951163201704350.jpg",
    "length": 251658,
    "artist": [
      {
        "name": "曹方瑞"
      }
    ],
    "album": "山雾与白鹿 电影原声带",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1349078267,
    "name": "心茧",
    "cover": "http://p2.music.126.net/t15Au_EYYCJrAKECmZB2hw==/109951163894722724.jpg",
    "length": 277579,
    "artist": [
      {
        "name": "周士原"
      }
    ],
    "album": "心茧",
    "fee": 8,
    "url": ""
  },
  {
    "id": 472141855,
    "name": "If Things Had Gone Our Way",
    "cover": "http://p2.music.126.net/8Mjs7H3Qi31-qirCLNYqMQ==/109951163239817522.jpg",
    "length": 207959,
    "artist": [
      {
        "name": "Dave Thomas Junior"
      }
    ],
    "album": "If Things Had Gone Our Way",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1313107303,
    "name": "再遗忘",
    "cover": "http://p2.music.126.net/R-EkbHKybQsshx-0M99rnA==/109951163573615384.jpg",
    "length": 282909,
    "artist": [
      {
        "name": "Laymen"
      }
    ],
    "album": "再遗忘",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1302870973,
    "name": "再也不喜欢你",
    "cover": "http://p1.music.126.net/WEu-jar6hUK7rW3xLl8JjA==/109951163468791068.jpg",
    "length": 224000,
    "artist": [
      {
        "name": "卡式定理"
      }
    ],
    "album": "再也不喜欢你了",
    "fee": 0,
    "url": ""
  },
  {
    "id": 3782908,
    "name": "Red",
    "cover": "http://p2.music.126.net/GUDu6EWXEQ7d_hEskXdaFw==/916992697609554.jpg",
    "length": 259000,
    "artist": [
      {
        "name": "Troi"
      }
    ],
    "album": "Red",
    "fee": 0,
    "url": ""
  },
  {
    "id": 543988258,
    "name": "拒绝情话",
    "cover": "http://p1.music.126.net/rG7zE6K3A373UH8XHI_NqQ==/109951163400201893.jpg",
    "length": 279128,
    "artist": [
      {
        "name": "庆庆"
      }
    ],
    "album": "纠结",
    "fee": 8,
    "url": ""
  },
  {
    "id": 535134686,
    "name": "我真不知道这歌该叫什么名字",
    "cover": "http://p1.music.126.net/MYieXXJq_IGr9ziTQ3ankA==/109951163129954620.jpg",
    "length": 93500,
    "artist": [
      {
        "name": "江皓南"
      }
    ],
    "album": "我真不知道这歌该叫什么名字",
    "fee": 8,
    "url": ""
  },
  {
    "id": 464277358,
    "name": "标本",
    "cover": "http://p2.music.126.net/36-UaVGKtlZFXmq61MG03w==/109951164235432551.jpg",
    "length": 172479,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "标本",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1367408290,
    "name": "他不喜欢你",
    "cover": "http://p2.music.126.net/Oct54UCkGLMHGNSRnAtILQ==/109951164096454538.jpg",
    "length": 230869,
    "artist": [
      {
        "name": "蜷花（李子璇）"
      }
    ],
    "album": "别开我玩笑",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1347445635,
    "name": "要命",
    "cover": "http://p2.music.126.net/5bDKaUNtBdFvVY_wiRPYbA==/109951164814830678.jpg",
    "length": 217258,
    "artist": [
      {
        "name": "茶茶"
      }
    ],
    "album": "时效性的质量轨迹",
    "fee": 8,
    "url": ""
  },
  {
    "id": 496073410,
    "name": "再也不会有人会比我更爱你",
    "cover": "http://p2.music.126.net/b2_AuddnpreCTQPwTajg2A==/109951162994638340.jpg",
    "length": 420464,
    "artist": [
      {
        "name": "黄恺"
      }
    ],
    "album": "再也不会有人会比我更爱你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1363959080,
    "name": "超人",
    "cover": "http://p2.music.126.net/4GhkLmQTpf89G1VNsddIag==/109951164059025748.jpg",
    "length": 373714,
    "artist": [
      {
        "name": "王贰浪"
      }
    ],
    "album": "超人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 442493220,
    "name": "愚人",
    "cover": "http://p2.music.126.net/1pCsd0ut4IBmGxC0n13RcA==/109951164235454596.jpg",
    "length": 198619,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "愚人",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1368563262,
    "name": "玫瑰往事",
    "cover": "http://p2.music.126.net/NtuVzQnYYRay2gycgzSIqQ==/109951164109577025.jpg",
    "length": 207380,
    "artist": [
      {
        "name": "陶薏点"
      }
    ],
    "album": "玫瑰往事",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1359356908,
    "name": "晚安",
    "cover": "http://p2.music.126.net/-rC55JsnmEWvafJQsAZaWw==/109951170473693123.jpg",
    "length": 289184,
    "artist": [
      {
        "name": "颜人中"
      }
    ],
    "album": "晚安",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31517567,
    "name": "给少年的歌",
    "cover": "http://p2.music.126.net/beK0Y-4vgyZoIy21QFXC0A==/7696581394971660.jpg",
    "length": 319764,
    "artist": [
      {
        "name": "程璧"
      }
    ],
    "album": "我想和你虚度时光",
    "fee": 8,
    "url": ""
  },
  {
    "id": 432430716,
    "name": "g小调的巴赫",
    "cover": "http://p2.music.126.net/FyCPUGdN_w3-sU3Ph86vyg==/109951162848923327.jpg",
    "length": 168698,
    "artist": [
      {
        "name": "177"
      }
    ],
    "album": "巴赫平均律",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1305696930,
    "name": "烟雨琼楼",
    "cover": "http://p2.music.126.net/U2b4kVKRb5yemMykpcsBaA==/109951163519892384.jpg",
    "length": 331666,
    "artist": [
      {
        "name": "Before the Sunrise"
      }
    ],
    "album": "烟雨琼楼",
    "fee": 0,
    "url": ""
  },
  {
    "id": 431811455,
    "name": "I Will Follow You",
    "cover": "http://p2.music.126.net/d6Z9XcqUnKkwWNa3bok5NA==/109951170050443295.jpg",
    "length": 159434,
    "artist": [
      {
        "name": "Toulouse"
      }
    ],
    "album": "I Will Follow You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 16766465,
    "name": "Jesus, Etc.",
    "cover": "http://p2.music.126.net/f0lHOeAeWfPEdpLG4fqglQ==/109951163470679674.jpg",
    "length": 257413,
    "artist": [
      {
        "name": "Bill Fay"
      }
    ],
    "album": "Life Is People",
    "fee": 8,
    "url": ""
  },
  {
    "id": 521416788,
    "name": "路人",
    "cover": "http://p2.music.126.net/pRSgpezZUZC4D3Iv6IbymQ==/109951163123434763.jpg",
    "length": 277627,
    "artist": [
      {
        "name": "宋宇航"
      }
    ],
    "album": "空想",
    "fee": 8,
    "url": ""
  },
  {
    "id": 523228351,
    "name": "北极星的天空",
    "cover": "http://p2.music.126.net/I5ENG6FsMTs8WHRU4DgWeA==/109951163079647805.jpg",
    "length": 300475,
    "artist": [
      {
        "name": "杨竹"
      }
    ],
    "album": "北极星的天空",
    "fee": 8,
    "url": ""
  },
  {
    "id": 551340498,
    "name": "Car Park",
    "cover": "http://p2.music.126.net/DcW3GS3LMh7mzDSp7u2IIw==/109951173011942015.jpg",
    "length": 173499,
    "artist": [
      {
        "name": "Fenne Lily"
      }
    ],
    "album": "Car Park",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29572418,
    "name": "Exhale (Shoop Shoop)",
    "cover": "http://p2.music.126.net/H5sGJP2Q8pfHtIgtob8B5w==/6655343883966893.jpg",
    "length": 225000,
    "artist": [
      {
        "name": "Robin Thicke"
      }
    ],
    "album": "Exhale (Shoop Shoop)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1333144715,
    "name": "Higher Than the moon",
    "cover": "http://p2.music.126.net/BOiaGUf84Yv_sZKRpmZilg==/109951163723250222.jpg",
    "length": 211750,
    "artist": [
      {
        "name": "TRØVES"
      },
      {
        "name": "Obeds"
      }
    ],
    "album": "Higher Than the moon",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1352542682,
    "name": "小城",
    "cover": "http://p2.music.126.net/db1_oEfQh19At1byXq5boA==/109951163711949662.jpg",
    "length": 271838,
    "artist": [
      {
        "name": "李曼维"
      }
    ],
    "album": "关于你",
    "fee": 8,
    "url": ""
  },
  {
    "id": 407444039,
    "name": "海王星",
    "cover": "http://p1.music.126.net/nLwViGP1a9mzSRk9LiklJw==/17702137207431775.jpg",
    "length": 199392,
    "artist": [
      {
        "name": "魏诗莹"
      }
    ],
    "album": "Demo2015",
    "fee": 8,
    "url": ""
  },
  {
    "id": 503613596,
    "name": "我们都曾越过崇山峻岭",
    "cover": "http://p2.music.126.net/JZEQU6jFTmDiNb2RQ1l6wQ==/109951163012048713.jpg",
    "length": 245054,
    "artist": [
      {
        "name": "陈文非"
      }
    ],
    "album": "我们都曾越过崇山峻岭",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19466006,
    "name": "Draw Your Swords",
    "cover": "http://p1.music.126.net/4UYv_r71ttURwyiWPZO8fQ==/109951167028193190.jpg",
    "length": 395613,
    "artist": [
      {
        "name": "Angus & Julia Stone"
      }
    ],
    "album": "Down the Way (Bonus Track Version)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 536483221,
    "name": "你怎么蠢到我喜欢你都不知道",
    "cover": "http://p1.music.126.net/lEybD09WAflaIkPj91qv2w==/109951166608686943.jpg",
    "length": 246648,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "蠢",
    "fee": 8,
    "url": ""
  },
  {
    "id": 557169166,
    "name": "林深时见鹿",
    "cover": "http://p2.music.126.net/ygu_0gFrcKUVSH5H6gv-7g==/109951165375933710.jpg",
    "length": 319042,
    "artist": [
      {
        "name": "苏刘"
      },
      {
        "name": "Wilreams"
      },
      {
        "name": "青阳苏打"
      }
    ],
    "album": "青阳苏打",
    "fee": 8,
    "url": ""
  },
  {
    "id": 523756204,
    "name": "别处的夕阳",
    "cover": "http://p1.music.126.net/7YXc17t-edLz-Ta-Xe2bMQ==/109951163081729505.jpg",
    "length": 201190,
    "artist": [
      {
        "name": "陈婧霏"
      }
    ],
    "album": "别处的夕阳",
    "fee": 8,
    "url": ""
  },
  {
    "id": 514761125,
    "name": "阍者",
    "cover": "http://p2.music.126.net/Nm9VNrN0oE9kmPPyxTomoA==/109951163742438662.jpg",
    "length": 296331,
    "artist": [
      {
        "name": "简弘亦"
      }
    ],
    "album": "柔软的国",
    "fee": 8,
    "url": ""
  },
  {
    "id": 431791310,
    "name": "Thinkin about U",
    "cover": "http://p1.music.126.net/GdWpgNB4dzL87k6ixDJxDQ==/109951162862671945.jpg",
    "length": 236518,
    "artist": [
      {
        "name": "Darren达布希勒图"
      }
    ],
    "album": "missya",
    "fee": 8,
    "url": ""
  },
  {
    "id": 535725079,
    "name": "路过",
    "cover": "http://p2.music.126.net/rmtIr1HvCu9xKki70GN6Wg==/109951166608682496.jpg",
    "length": 215053,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "心情气象播报台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1300644881,
    "name": "奇妙能力歌",
    "cover": "http://p1.music.126.net/ukWidNej0zpCsqCHXpnGdA==/109951163990661981.jpg",
    "length": 109520,
    "artist": [
      {
        "name": "房子帆"
      },
      {
        "name": "赵海宁"
      }
    ],
    "album": "给东北姑娘的歌 终极版",
    "fee": 0,
    "url": ""
  },
  {
    "id": 503741427,
    "name": "懒",
    "cover": "http://p1.music.126.net/rmtIr1HvCu9xKki70GN6Wg==/109951166608682496.jpg",
    "length": 193594,
    "artist": [
      {
        "name": "邹念慈"
      }
    ],
    "album": "心情气象播报台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 485054631,
    "name": "晚安",
    "cover": "http://p2.music.126.net/a_8Owid3mOJ5KBkpBSmSvw==/109951163409398567.jpg",
    "length": 192848,
    "artist": [
      {
        "name": "陈尤利"
      }
    ],
    "album": "耳语2.0",
    "fee": 8,
    "url": ""
  },
  {
    "id": 526979373,
    "name": "不再",
    "cover": "http://p1.music.126.net/yoJ7yYJTWJkeIG3nQ_B42Q==/109951163095463362.jpg",
    "length": 217273,
    "artist": [
      {
        "name": "罗永川"
      }
    ],
    "album": "不再",
    "fee": 8,
    "url": ""
  },
  {
    "id": 489215708,
    "name": "半坏街灯",
    "cover": "http://p2.music.126.net/1D5dvXYxieQ5jbjcXFedXQ==/109951163173461725.jpg",
    "length": 279500,
    "artist": [
      {
        "name": "陈尤利"
      }
    ],
    "album": "半坏街灯",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34852507,
    "name": "Just Breathe",
    "cover": "http://p2.music.126.net/F0aCxrVSMOvFh47MHIRYCQ==/109951163157783378.jpg",
    "length": 260453,
    "artist": [
      {
        "name": "Don Brownrigg"
      }
    ],
    "album": "It Takes All Kinds (To Make This World I Find)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1314385613,
    "name": "荒唐",
    "cover": "http://p2.music.126.net/1YnM0_qxp6IVxfIF6S157Q==/109951163579687054.jpg",
    "length": 247896,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "假洒脱",
    "fee": 8,
    "url": ""
  },
  {
    "id": 436487081,
    "name": "Familiär",
    "cover": "http://p1.music.126.net/U2Dw6vcepR2KPL2B9GT2iw==/109951163471282769.jpg",
    "length": 235988,
    "artist": [
      {
        "name": "Agnes Obel"
      }
    ],
    "album": "Citizen of Glass",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1314382744,
    "name": "尝试温柔",
    "cover": "http://p1.music.126.net/1YnM0_qxp6IVxfIF6S157Q==/109951163579687054.jpg",
    "length": 259726,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "假洒脱",
    "fee": 8,
    "url": ""
  },
  {
    "id": 863595710,
    "name": "夜27.",
    "cover": "http://p2.music.126.net/aijuTY49c_ou5YKcB7nKHA==/109951163382944695.jpg",
    "length": 275644,
    "artist": [
      {
        "name": "司徒骏文"
      }
    ],
    "album": "夜27",
    "fee": 0,
    "url": ""
  },
  {
    "id": 27630180,
    "name": "Come Close Now",
    "cover": "http://p2.music.126.net/pL55eSA87JQjzYV1u8xeeg==/109951169377384473.jpg",
    "length": 262896,
    "artist": [
      {
        "name": "Christa Wells"
      }
    ],
    "album": "Feed Your Soul",
    "fee": 8,
    "url": ""
  },
  {
    "id": 476598236,
    "name": "You're Somebody Else",
    "cover": "http://p2.music.126.net/uEwOIFG3dpOYGHfkpDvrpw==/109951170927735844.jpg",
    "length": 218133,
    "artist": [
      {
        "name": "Flora Cash"
      }
    ],
    "album": "Nothing Lasts Forever (And It's Fine)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32717809,
    "name": "Build It Better",
    "cover": "http://p1.music.126.net/nw6EMUQ3RnCUV0wIP68jDQ==/7802134511651504.jpg",
    "length": 230000,
    "artist": [
      {
        "name": "Aron Wright"
      }
    ],
    "album": "Build It Better",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28193020,
    "name": "Midnight",
    "cover": "http://p1.music.126.net/H-U2ZSjtzIR4DnhyNaHNvQ==/109951169487857517.jpg",
    "length": 166661,
    "artist": [
      {
        "name": "Barcelona"
      }
    ],
    "album": "Not Quite Yours",
    "fee": 8,
    "url": ""
  },
  {
    "id": 480769653,
    "name": "Sweet",
    "cover": "http://p2.music.126.net/9dpCWsj3DNR-3AzRRhcQcg==/109951167302437735.jpg",
    "length": 292110,
    "artist": [
      {
        "name": "Cigarettes After Sex"
      }
    ],
    "album": "Cigarettes After Sex",
    "fee": 8,
    "url": ""
  },
  {
    "id": 525278524,
    "name": "无问",
    "cover": "http://p1.music.126.net/SJLDel776uY6MEKEU5GbjA==/109951163099854364.jpg",
    "length": 258976,
    "artist": [
      {
        "name": "毛不易"
      }
    ],
    "album": "无问",
    "fee": 8,
    "url": ""
  },
  {
    "id": 479598964,
    "name": "椿",
    "cover": "http://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg",
    "length": 217640,
    "artist": [
      {
        "name": "沈以诚"
      }
    ],
    "album": "椿",
    "fee": 8,
    "url": ""
  },
  {
    "id": 297752,
    "name": "门",
    "cover": "http://p2.music.126.net/_N5s7MEJWPLVFxt0RiQtnQ==/109951169889420553.jpg",
    "length": 201456,
    "artist": [
      {
        "name": "魏如萱"
      }
    ],
    "album": "在哪里",
    "fee": 8,
    "url": ""
  },
  {
    "id": 461124355,
    "name": "Soaked Through",
    "cover": "http://p2.music.126.net/JLHP01uFWwtKCP1ocJ1D7g==/109951169265709572.jpg",
    "length": 201170,
    "artist": [
      {
        "name": "Sara"
      }
    ],
    "album": "Haunt",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2775190,
    "name": "End of the World",
    "cover": "http://p2.music.126.net/Wq-qj0UFEV3n4SA14HjfzA==/6663040464536802.jpg",
    "length": 165465,
    "artist": [
      {
        "name": "Julie London"
      }
    ],
    "album": "Cry Me a River",
    "fee": 0,
    "url": ""
  },
  {
    "id": 528271324,
    "name": "Time Like This",
    "cover": "http://p2.music.126.net/dqfTDApGLbjWTC6h6OjoeQ==/109951163100806620.jpg",
    "length": 266375,
    "artist": [
      {
        "name": "TIMERS"
      }
    ],
    "album": "Time Like This",
    "fee": 0,
    "url": ""
  },
  {
    "id": 448707059,
    "name": "我又想你了",
    "cover": "http://p2.music.126.net/UuhOIZRvk55cqjVeZB3Omw==/18813743464544638.jpg",
    "length": 280781,
    "artist": [
      {
        "name": "陈信喆"
      }
    ],
    "album": "我又想你了",
    "fee": 8,
    "url": ""
  },
  {
    "id": 448445624,
    "name": "别问我（Cover 孙丹菲）",
    "cover": "http://p1.music.126.net/7VotCF7QZVgvh6uLPtyL7Q==/109951166328126998.jpg",
    "length": 280267,
    "artist": [
      {
        "name": "河豚"
      }
    ],
    "album": "HETUN20161221",
    "fee": 0,
    "url": ""
  },
  {
    "id": 18449193,
    "name": "Say Hello",
    "cover": "http://p1.music.126.net/CjwyooRRF_6oT6rP6mBmDA==/109951166683572040.jpg",
    "length": 141493,
    "artist": [
      {
        "name": "Rosie Thomas"
      },
      {
        "name": "Sufjan Stevens"
      }
    ],
    "album": "These Friends Of Mine (Expanded Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 33054289,
    "name": "好女阿己",
    "cover": "http://p2.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 255000,
    "artist": [
      {
        "name": "San塔"
      }
    ],
    "album": "热门华语266",
    "fee": 0,
    "url": ""
  },
  {
    "id": 505818831,
    "name": "余生相",
    "cover": "http://p2.music.126.net/gs9xF0rGLnUmsBr26ju73Q==/109951163190161411.jpg",
    "length": 258188,
    "artist": [
      {
        "name": "伏仪"
      }
    ],
    "album": "硬骨见鹿集",
    "fee": 8,
    "url": ""
  },
  {
    "id": 501220618,
    "name": "记昨日书",
    "cover": "http://p2.music.126.net/gs9xF0rGLnUmsBr26ju73Q==/109951163190161411.jpg",
    "length": 249273,
    "artist": [
      {
        "name": "伏仪"
      }
    ],
    "album": "硬骨见鹿集",
    "fee": 8,
    "url": ""
  },
  {
    "id": 491686047,
    "name": "Human",
    "cover": "http://p1.music.126.net/oZIfYYPMmgRCYcTu54pRaA==/18701593278831135.jpg",
    "length": 197671,
    "artist": [
      {
        "name": "MADILYN"
      }
    ],
    "album": "Human",
    "fee": 8,
    "url": ""
  },
  {
    "id": 2917617,
    "name": "Bodega Rose",
    "cover": "http://p2.music.126.net/dEqPtx3g48uR7CauoATOEQ==/1773512255607890.jpg",
    "length": 229266,
    "artist": [
      {
        "name": "Kesang Marstrand"
      }
    ],
    "album": "Bodega Rose",
    "fee": 0,
    "url": ""
  },
  {
    "id": 471486421,
    "name": "安静的时间里",
    "cover": "http://p2.music.126.net/fFlB8bLrTM1haW318H3IKw==/109951162899256700.jpg",
    "length": 271098,
    "artist": [
      {
        "name": "小海"
      }
    ],
    "album": "安静的时间里（demo）",
    "fee": 8,
    "url": ""
  },
  {
    "id": 37095481,
    "name": "Underflow",
    "cover": "http://p1.music.126.net/tgDDbHrddBoJJ6ubupeNhw==/109951164887147869.jpg",
    "length": 217746,
    "artist": [
      {
        "name": "Emma Louise"
      }
    ],
    "album": "Underflow",
    "fee": 0,
    "url": ""
  },
  {
    "id": 480971272,
    "name": "没了",
    "cover": "http://p2.music.126.net/IFgRlf1BYszYv6vBtxTIYA==/109951162936105587.jpg",
    "length": 132009,
    "artist": [
      {
        "name": "赵烁"
      }
    ],
    "album": "没了",
    "fee": 8,
    "url": ""
  },
  {
    "id": 35314235,
    "name": "Like I’m Gonna Lose You",
    "cover": "http://p2.music.126.net/xIb3pIvb5ScMX7OZcPrhQw==/109951163878847508.jpg",
    "length": 232338,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Like I'm Gonna Lose You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 421885447,
    "name": "我有我爱我",
    "cover": "http://p2.music.126.net/1QWgd6P6BR8UEVz2HvnPAg==/18238698881948878.jpg",
    "length": 236700,
    "artist": [
      {
        "name": "少年霜"
      }
    ],
    "album": "我有我爱我",
    "fee": 0,
    "url": ""
  },
  {
    "id": 442503648,
    "name": "我在你的未来",
    "cover": "http://p2.music.126.net/GzJC_J1uxKaXaDZ76Wc4dg==/109951162811670391.jpg",
    "length": 263688,
    "artist": [
      {
        "name": "左颜"
      }
    ],
    "album": "小时候",
    "fee": 8,
    "url": ""
  },
  {
    "id": 409430938,
    "name": "Window Pain",
    "cover": "http://p2.music.126.net/7aRIYrLmruVwyOT-KlPlvA==/1420569029105189.jpg",
    "length": 195500,
    "artist": [
      {
        "name": "Xenia"
      }
    ],
    "album": "Artemisa",
    "fee": 0,
    "url": ""
  },
  {
    "id": 427606933,
    "name": "你眸中有一个宇宙（翻自 池年）",
    "cover": "http://p2.music.126.net/rVG3EfddmEBfXrVINcDCOQ==/18198016951756197.jpg",
    "length": 222407,
    "artist": [
      {
        "name": "不会唱歌的线"
      }
    ],
    "album": "你眸中有一个宇宙",
    "fee": 0,
    "url": ""
  },
  {
    "id": 421870099,
    "name": "恋爱的犀牛",
    "cover": "http://p2.music.126.net/nJ9nSgv0t_zfKNOEmt3Arw==/17791197649359137.jpg",
    "length": 241923,
    "artist": [
      {
        "name": "黄雨篱"
      },
      {
        "name": "刘逸诗"
      }
    ],
    "album": "恋爱的犀牛",
    "fee": 8,
    "url": ""
  },
  {
    "id": 41665424,
    "name": "怕生",
    "cover": "http://p1.music.126.net/TN6V2aDjicy39H8cxQJv7g==/17831879579390115.jpg",
    "length": 347637,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "第二人称",
    "fee": 8,
    "url": ""
  },
  {
    "id": 30394960,
    "name": "过来人 (Live)",
    "cover": "http://p2.music.126.net/A8iQ8rtE_89oMB_ivGy3sw==/7798835975923145.jpg",
    "length": 251026,
    "artist": [
      {
        "name": "hush！"
      }
    ],
    "album": "Everyone's Gonna Miss You",
    "fee": 0,
    "url": ""
  },
  {
    "id": 34228369,
    "name": "The Climb",
    "cover": "http://p2.music.126.net/3EeK1jMZldoMGT496nl1_Q==/109951168473932291.jpg",
    "length": 197240,
    "artist": [
      {
        "name": "Cœur de pirate"
      }
    ],
    "album": "Roses (Deluxe Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28038363,
    "name": "Where Is My Mind",
    "cover": "http://p1.music.126.net/K9RybH385QWbXkw95AM1NA==/5823013580751658.jpg",
    "length": 216040,
    "artist": [
      {
        "name": "Sunday Girl"
      }
    ],
    "album": "Where Is My Mind",
    "fee": 0,
    "url": ""
  },
  {
    "id": 41664255,
    "name": "未知伴侣",
    "cover": "http://p2.music.126.net/TN6V2aDjicy39H8cxQJv7g==/17831879579390115.jpg",
    "length": 287112,
    "artist": [
      {
        "name": "龚子婕JessieG"
      }
    ],
    "album": "第二人称",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31445554,
    "name": "七月上",
    "cover": "http://p2.music.126.net/uxyYBS5jhmi_DN4xDYy3eg==/7872503255697381.jpg",
    "length": 190093,
    "artist": [
      {
        "name": "Jam"
      }
    ],
    "album": "阿敬的单曲集",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34228431,
    "name": "Hurts Like Hell",
    "cover": "http://p2.music.126.net/KeVuYDLhlbfPB_vb_BJVJw==/109951166443179625.jpg",
    "length": 232626,
    "artist": [
      {
        "name": "Fleurie"
      },
      {
        "name": "Tommee Profitt"
      }
    ],
    "album": "Hurts Like Hell",
    "fee": 8,
    "url": ""
  },
  {
    "id": 441835832,
    "name": "Falling",
    "cover": "http://p2.music.126.net/puRRNCHncD-tU9lU8rpgeA==/109951163958009406.jpg",
    "length": 251213,
    "artist": [
      {
        "name": "Joshua Radin"
      }
    ],
    "album": "The Fall",
    "fee": 8,
    "url": ""
  },
  {
    "id": 17950503,
    "name": "Sunday Morning Birds - Singin' Hallelujah",
    "cover": "http://p1.music.126.net/Ulb_8xPgukbzsiXELA4XYQ==/109951170436178901.jpg",
    "length": 232120,
    "artist": [
      {
        "name": "Pajaro Sunrise"
      }
    ],
    "album": "Pajaro Sunrise",
    "fee": 8,
    "url": ""
  },
  {
    "id": 417596830,
    "name": "美好事物",
    "cover": "http://p1.music.126.net/RsmgVs3F99IfpGOjZ347HA==/18252992533065802.jpg",
    "length": 198765,
    "artist": [
      {
        "name": "房东的猫"
      }
    ],
    "album": "美好事物",
    "fee": 8,
    "url": ""
  },
  {
    "id": 416892296,
    "name": "安和桥",
    "cover": "http://p1.music.126.net/Nze7lE61wH1bhTSXpVBvGQ==/109951163445284035.jpg",
    "length": 248499,
    "artist": [
      {
        "name": "宇西"
      }
    ],
    "album": "安和桥",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34167935,
    "name": "无脚鸟",
    "cover": "http://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 272935,
    "artist": [
      {
        "name": "蛙婶"
      },
      {
        "name": "蔡翊昇"
      }
    ],
    "album": "热门华语278",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28646468,
    "name": "Shadow of Doubt",
    "cover": "http://p1.music.126.net/d8PKQ5DgNMPgTRgmjiY5pg==/5790028232098074.jpg",
    "length": 239000,
    "artist": [
      {
        "name": "Melanie Penn"
      }
    ],
    "album": "Hope Tonight",
    "fee": 0,
    "url": ""
  },
  {
    "id": 30284674,
    "name": "初恋旧爱新欢",
    "cover": "http://p1.music.126.net/ydNOkLw4mHoFmB0QmKxDlg==/2882919488721526.jpg",
    "length": 303560,
    "artist": [
      {
        "name": "RAiNBOW计划"
      },
      {
        "name": "林力尧"
      }
    ],
    "album": "红",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19675491,
    "name": "Twenty Seven Strangers",
    "cover": "http://p2.music.126.net/-ptOHbd9So8dA3mIStgAfA==/109951163392119334.jpg",
    "length": 204213,
    "artist": [
      {
        "name": "Villagers"
      }
    ],
    "album": "Becoming A Jackal",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32957827,
    "name": "一座城",
    "cover": "http://p2.music.126.net/LyrD0npp_jHR2GNxJQ6tnw==/17966019997940477.jpg",
    "length": 293015,
    "artist": [
      {
        "name": "白亮"
      }
    ],
    "album": "一座城",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20113376,
    "name": "Canon in D (Pachelbel)",
    "cover": "http://p2.music.126.net/uV0ypx-AxS3YZhH3RUQoSQ==/109951165351921011.jpg",
    "length": 275000,
    "artist": [
      {
        "name": "Mike Strickland"
      }
    ],
    "album": "The Piano",
    "fee": 8,
    "url": ""
  },
  {
    "id": 417833270,
    "name": "TWO",
    "cover": "http://p1.music.126.net/gaIGQ1krbXOLyNWvRbyq9w==/1417270500276173.jpg",
    "length": 260952,
    "artist": [
      {
        "name": "Ne-Yo"
      }
    ],
    "album": "TWO",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1374125,
    "name": "This Woman’s Work (Kate Bush)",
    "cover": "http://p2.music.126.net/IZilQIG21NYDPwrZPW8VGA==/941181953428794.jpg",
    "length": 192053,
    "artist": [
      {
        "name": "Greg Laswell"
      }
    ],
    "album": "Covers EP",
    "fee": 0,
    "url": ""
  },
  {
    "id": 2878157,
    "name": "Lost & Far From Home",
    "cover": "http://p2.music.126.net/dhp8yNKhbjSGIFurYPXoSw==/109951170987170997.jpg",
    "length": 237865,
    "artist": [
      {
        "name": "Katie Costello"
      }
    ],
    "album": "The City In Me",
    "fee": 8,
    "url": ""
  },
  {
    "id": 35625822,
    "name": "可以不说",
    "cover": "http://p2.music.126.net/W_srVOtG_DKS1-txPLqNQQ==/3273246117001205.jpg",
    "length": 274736,
    "artist": [
      {
        "name": "RAiNBOW计划"
      }
    ],
    "album": "橙",
    "fee": 8,
    "url": ""
  },
  {
    "id": 405599685,
    "name": "Painting Greys",
    "cover": "http://p1.music.126.net/seTJFvUHGofcvARbiH7OUg==/109951168313242757.jpg",
    "length": 227368,
    "artist": [
      {
        "name": "Emmit Fenn"
      }
    ],
    "album": "Painting Greys",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28352987,
    "name": "A Way To You Again",
    "cover": "http://p2.music.126.net/qGeygGUuV2_6LyDnwuz9lQ==/109951170987781237.jpg",
    "length": 225535,
    "artist": [
      {
        "name": "Peter Bradley Adams"
      }
    ],
    "album": "The Mighty Storm",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32217106,
    "name": "客从何处来",
    "cover": "http://p1.music.126.net/W-WHCe2sQK1MQ_ftE8oCcA==/7760353069698404.jpg",
    "length": 358000,
    "artist": [
      {
        "name": "燕池"
      }
    ],
    "album": "燕歌行",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34609166,
    "name": "故梦",
    "cover": "http://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg",
    "length": 288261,
    "artist": [
      {
        "name": "伦桑"
      }
    ],
    "album": "热门华语276",
    "fee": 0,
    "url": ""
  },
  {
    "id": 5092287,
    "name": "To Be Alone With You",
    "cover": "http://p2.music.126.net/JHiZ7idJMu0Xp6bburEn7g==/109951169418248960.jpg",
    "length": 212266,
    "artist": [
      {
        "name": "Joshua James"
      }
    ],
    "album": "Seven Swans Reimagined",
    "fee": 8,
    "url": ""
  },
  {
    "id": 18733198,
    "name": "Dealbreaker",
    "cover": "http://p1.music.126.net/Hoi64OvcNAgy32euQG18gw==/109951165142258884.jpg",
    "length": 344146,
    "artist": [
      {
        "name": "Rachael Yamagata"
      }
    ],
    "album": "Chesapeake",
    "fee": 8,
    "url": ""
  },
  {
    "id": 31721697,
    "name": "青春大概",
    "cover": "http://p2.music.126.net/rbUy9P12xdIssA-2t6lfkA==/2888417047256583.jpg",
    "length": 226719,
    "artist": [
      {
        "name": "上上"
      }
    ],
    "album": "青春戏",
    "fee": 0,
    "url": ""
  },
  {
    "id": 33916532,
    "name": "River of Gold",
    "cover": "http://p2.music.126.net/UchpnjfGcUkgwjHIsFaaiw==/3331520232351421.jpg",
    "length": 192339,
    "artist": [
      {
        "name": "Daniela Andrade"
      }
    ],
    "album": "Things We've Said",
    "fee": 0,
    "url": ""
  },
  {
    "id": 31445772,
    "name": "理想三旬",
    "cover": "http://p2.music.126.net/ryk8Gu64rOhlYn0pc2Q8Ww==/109951168090271827.jpg",
    "length": 210814,
    "artist": [
      {
        "name": "陈鸿宇"
      }
    ],
    "album": "浓烟下的诗歌电台",
    "fee": 8,
    "url": ""
  },
  {
    "id": 29572637,
    "name": "I'm Glad I Found You (Solo)",
    "cover": "http://p2.music.126.net/M2jdTdEW8ZyTwSiVHpUr4Q==/109951168500761753.jpg",
    "length": 202346,
    "artist": [
      {
        "name": "Neil Young"
      }
    ],
    "album": "Storytone (Deluxe Edition)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28306482,
    "name": "Brand New Day (feat. Nina Nesbitt) [Acoustic Version]",
    "cover": "http://p1.music.126.net/FkNdzTy_2hqq6OIwh068cw==/109951165967524384.jpg",
    "length": 221146,
    "artist": [
      {
        "name": "Kodaline"
      }
    ],
    "album": "In A Perfect World",
    "fee": 8,
    "url": ""
  },
  {
    "id": 34468945,
    "name": "Keeper",
    "cover": "http://p1.music.126.net/WRXvW_6eaVvd7wpu5QDINQ==/109951163920615520.jpg",
    "length": 265518,
    "artist": [
      {
        "name": "Furns"
      }
    ],
    "album": "Keeper",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20978362,
    "name": "The Gettysburg Address",
    "cover": "http://p2.music.126.net/_BjtrSOi1VqMq-csQ23SCA==/693791837137385.jpg",
    "length": 360893,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "The Decline Of The Country & Western Civilisation",
    "fee": 0,
    "url": ""
  },
  {
    "id": 31546195,
    "name": "Limits",
    "cover": "http://p2.music.126.net/FxejNbXsU0zcqbLMvCWynw==/109951163092095241.jpg",
    "length": 193304,
    "artist": [
      {
        "name": "Arctic Lake"
      }
    ],
    "album": "Limits",
    "fee": 8,
    "url": ""
  },
  {
    "id": 399953119,
    "name": "Ilusm",
    "cover": "http://p2.music.126.net/GcgzNfcE8dgP6GuhRndSyg==/109951168487220477.jpg",
    "length": 199005,
    "artist": [
      {
        "name": "gnash"
      }
    ],
    "album": "Ilusm",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28258463,
    "name": "Fall in Love",
    "cover": "http://p2.music.126.net/DvPl_aRzdbBGykMwIaeFKA==/109951169378355620.jpg",
    "length": 266193,
    "artist": [
      {
        "name": "Barcelona"
      }
    ],
    "album": "Love You",
    "fee": 8,
    "url": ""
  },
  {
    "id": 28059417,
    "name": "他不懂",
    "cover": "http://p2.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg",
    "length": 232213,
    "artist": [
      {
        "name": "张杰"
      }
    ],
    "album": "爱，不解释",
    "fee": 8,
    "url": ""
  },
  {
    "id": 32785456,
    "name": "A Little Bit",
    "cover": "http://p1.music.126.net/dSukWMag2sxsUxR3KHPslw==/2896113629906193.jpg",
    "length": 205938,
    "artist": [
      {
        "name": "Sofi de la Torre"
      }
    ],
    "album": "Winter Mood, Vol. 2",
    "fee": 8,
    "url": ""
  },
  {
    "id": 27810132,
    "name": "Explore",
    "cover": "http://p2.music.126.net/PNPlMXQNd_7kngPmMIA53g==/109951163712802526.jpg",
    "length": 202507,
    "artist": [
      {
        "name": "Prince of Spain"
      }
    ],
    "album": "His Majesty",
    "fee": 8,
    "url": ""
  },
  {
    "id": 19159395,
    "name": "All Out of Love (Single)",
    "cover": "http://p2.music.126.net/VeoWNDh_eyte6oaQxP-kog==/2529976255881424.jpg",
    "length": 231915,
    "artist": [
      {
        "name": "Sara Lov"
      }
    ],
    "album": "All Out Of Love - Single",
    "fee": 0,
    "url": ""
  },
  {
    "id": 29451361,
    "name": "Halo (acoustic)",
    "cover": "http://p1.music.126.net/cyG35d728X3LYlNw1LbMAw==/2536573325646941.jpg",
    "length": 244000,
    "artist": [
      {
        "name": "Jasmine Thompson"
      }
    ],
    "album": "Halo (acoustic) (Single)",
    "fee": 0,
    "url": ""
  },
  {
    "id": 19038417,
    "name": "Nine Million Bicycles",
    "cover": "http://p1.music.126.net/l-qE0cj1XaCoGxkwwarxfg==/700388906903044.jpg",
    "length": 197160,
    "artist": [
      {
        "name": "Katie Melua"
      }
    ],
    "album": "Nine Million Bicycles",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28280037,
    "name": "Boris",
    "cover": "http://p1.music.126.net/LyTRpJFvmkCsKc4NMZnNow==/17644962602657325.jpg",
    "length": 217840,
    "artist": [
      {
        "name": "Lo-Fang"
      }
    ],
    "album": "Blue Film",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3411353,
    "name": "Vincent (Live)",
    "cover": "http://p1.music.126.net/JHJuQqyPCXHg7QC31CoKAg==/109951165317644412.jpg",
    "length": 321666,
    "artist": [
      {
        "name": "Sara K."
      }
    ],
    "album": "Are We There Yet?",
    "fee": 8,
    "url": ""
  },
  {
    "id": 1475363,
    "name": "Nobody Loves You (When You're Down And Out)",
    "cover": "http://p2.music.126.net/aJSDGuGxvTBf8cG4nDhuYA==/109951163122961163.jpg",
    "length": 303266,
    "artist": [
      {
        "name": "John Lennon"
      }
    ],
    "album": "Wonsaponatime",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26511658,
    "name": "Ship In The Sand",
    "cover": "http://p2.music.126.net/mCTfoqjSbdsAgOd-6HdWCA==/109951168478835307.jpg",
    "length": 217644,
    "artist": [
      {
        "name": "Marble Sounds"
      }
    ],
    "album": "Dear Me, Look Up",
    "fee": 8,
    "url": ""
  },
  {
    "id": 27506485,
    "name": "Devastate Me",
    "cover": "http://p2.music.126.net/v0LUB1qtJFJtVDNK9sIw2g==/109951163655915544.jpg",
    "length": 261020,
    "artist": [
      {
        "name": "Rachael Yamagata"
      }
    ],
    "album": "The Noise Trade Loft Sessions Mixtape and More",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20703834,
    "name": "Beautiful Girl",
    "cover": "http://p2.music.126.net/gyDW5Esuc1JjIZyD7gMHHg==/746568395270973.jpg",
    "length": 158229,
    "artist": [
      {
        "name": "William Fitzsimmons"
      }
    ],
    "album": "Beautiful Girl",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28577864,
    "name": "All of Me (feat. Madilyn Bailey)",
    "cover": "http://p1.music.126.net/vEhcPPqfR-4-et8VTZXylA==/6009930557834824.jpg",
    "length": 271000,
    "artist": [
      {
        "name": "Jason Chen"
      },
      {
        "name": "MADILYN"
      }
    ],
    "album": "All of Me- Single",
    "fee": 0,
    "url": ""
  },
  {
    "id": 28592013,
    "name": "Slippin'",
    "cover": "http://p1.music.126.net/VrfqySA2WKct-In-6hm3MA==/109951169377382357.jpg",
    "length": 179606,
    "artist": [
      {
        "name": "Taylor Thrash"
      }
    ],
    "album": "Step Forward",
    "fee": 8,
    "url": ""
  },
  {
    "id": 16607021,
    "name": "Better Off",
    "cover": "http://p2.music.126.net/yWm5cCPPiNC73WSdpVL05A==/109951163371555445.jpg",
    "length": 172800,
    "artist": [
      {
        "name": "Lindsey Ray"
      }
    ],
    "album": "Goodbye From California",
    "fee": 8,
    "url": ""
  },
  {
    "id": 3314336,
    "name": "Hazy (Featuring William Fitzsimmons)",
    "cover": "http://p2.music.126.net/qO_cdKxNVEI9PZEi2BNk1w==/1779009813747598.jpg",
    "length": 235960,
    "artist": [
      {
        "name": "Rosi Golan"
      }
    ],
    "album": "Gypsies & Drifters",
    "fee": 0,
    "url": ""
  },
  {
    "id": 20978387,
    "name": "Popeye",
    "cover": "http://p2.music.126.net/DTIueopfXuyLYFuCG2vyMg==/109951168843137664.jpg",
    "length": 378480,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "OH (ohio)",
    "fee": 8,
    "url": ""
  },
  {
    "id": 26734315,
    "name": "Theone",
    "cover": "http://p2.music.126.net/bpftxsuz1PbA67aNRX3IWA==/5659186348248398.jpg",
    "length": 293000,
    "artist": [
      {
        "name": "Lambchop"
      }
    ],
    "album": "Another Country: Songs of Dignity & Redemption from the Other Side of the Tracks",
    "fee": 0,
    "url": ""
  },
  {
    "id": 17950534,
    "name": "Song for Evangeline",
    "cover": "http://p1.music.126.net/4I1X8iIa4Zrp0RrXQN1wvA==/109951170436179363.jpg",
    "length": 265533,
    "artist": [
      {
        "name": "Pajaro Sunrise"
      }
    ],
    "album": "Old Goodbyes",
    "fee": 8,
    "url": ""
  },
  {
    "id": 27757335,
    "name": "Morning Light",
    "cover": "http://p2.music.126.net/z23NPDPu20HnpVcaSnS0oA==/5743848743601552.jpg",
    "length": 331000,
    "artist": [
      {
        "name": "The Hunts"
      }
    ],
    "album": "We Were Young",
    "fee": 0,
    "url": ""
  },
  {
    "id": 1933598,
    "name": "Roses and Gold",
    "cover": "http://p2.music.126.net/ZnkkXSzM-OGDo6tJmB9Btg==/109951165797212871.jpg",
    "length": 317275,
    "artist": [
      {
        "name": "Robin Jackson"
      }
    ],
    "album": "Dust Diaries",
    "fee": 8,
    "url": ""
  },
  {
    "id": 20011259,
    "name": "Your Hands",
    "cover": "http://p1.music.126.net/aeZq5psmtryoE6Q6RejWHA==/6627856093173548.jpg",
    "length": 220000,
    "artist": [
      {
        "name": "JJ Heller"
      }
    ],
    "album": "Painted Red",
    "fee": 0,
    "url": ""
  },
  {
    "id": 3025202,
    "name": "Summertime Sadness",
    "cover": "http://p2.music.126.net/TJjjK6ai68IhvN04ZxJmTg==/109951163077703748.jpg",
    "length": 264034,
    "artist": [
      {
        "name": "Lana Del Rey"
      }
    ],
    "album": "Summertime Sadness",
    "fee": 0,
    "url": ""
  },
  {
    "id": 18449202,
    "name": "You And Me",
    "cover": "http://p1.music.126.net/ZySzF8hcT9LQmRZurKOz5A==/109951163822390996.jpg",
    "length": 124026,
    "artist": [
      {
        "name": "Rosie Thomas"
      }
    ],
    "album": "Only With Laughter Can You Win",
    "fee": 8,
    "url": ""
  },
  {
    "id": 16766469,
    "name": "The Coast No Man Can Tell",
    "cover": "http://p2.music.126.net/f0lHOeAeWfPEdpLG4fqglQ==/109951163470679674.jpg",
    "length": 186640,
    "artist": [
      {
        "name": "Bill Fay"
      }
    ],
    "album": "Life Is People",
    "fee": 8,
    "url": ""
  }
]
export default songs;
