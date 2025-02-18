const liffId = "2006065768-2a3pq0oM";
const urlParams = new URLSearchParams(window.location.search);
const link = urlParams.get("linkadmin");
const data = {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://img5.pic.in.th/file/secure-sv1/ezgif.com-optipngd95dbf11c5b43a9d.png",
      "size": "full",
      "animated": true
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "wrap": true,
          "weight": "bold",
          "size": "md",
          "contents": [
            {
              "type": "span",
              "text": "🥳 ยินดีกับคุณพี่ ",
              "size": "lg"
            },
            {
              "type": "span",
              "text": "destroyer"
            }
          ]
        },
        {
          "type": "text",
          "wrap": true,
          "weight": "bold",
          "size": "md",
          "contents": [
            {
              "type": "span",
              "text": "🎊รับเงินรางวัล🎊",
              "size": "lg"
            },
            {
              "type": "span",
              "text": " +10000",
              "size": "md",
              "color": "#00bb28"
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "ติดต่อแอดมิน",
            "uri": link
          },
          "style": "primary",
          "height": "sm",
          "color": "#a60000"
        }
      ],
      "spacing": "sm"
    }
  }
liff.init({ liffId: liffId })
    .then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        } else {
            shareMessage().then(()=>{
                liff.closeWindow();
            });
        }
    })
    .catch((err) => {
        console.error("เกิดข้อผิดพลาดในการโหลด LIFF:", err);
    });

function shareMessage() {
    liff.shareTargetPicker([
        {
            "type": "flex",
            "altText": "🎊 ยินดีกับเงินรางวัลด้วยนะคะ",
            "contents": data
        }
    ], {
        isMultiple: true
    })
    .then((res) => {
        console.log(res);
        if (res) {
            console.log("แชร์สำเร็จ!");
            liff.closeWindow(); // ✅ ปิดหน้าต่าง LIFF
        } else {
            console.log("ผู้ใช้ยกเลิกการแชร์");
        }
    })
    .catch((err) => {
        console.error("เกิดข้อผิดพลาดในการแชร์:", err);
    });
}
