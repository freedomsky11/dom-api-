let yFirstLeft = `
<section data="左气泡">
<section style="width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url('http://mmbiz.qpic.cn/mmbiz_png/jFfUbqak7PTiaZ6SEWQib1KIsDNUnqp8r6vElwibqVWxfJnwYu3icJqbJfiajHxeTHc8l8H4tfvBCaI7OM4NDG8ws8A/0?wx_fmt=png'); padding: 5px 45px 10px 40px; background-position: 0% 0px;">
  <section style="margin: 0px 10px; text-align: left;">红小兵</section>
  <section style="background-repeat: no-repeat; background-size: 10px; box-sizing: border-box; overflow: hidden; background-image: url('https://mmbiz.qlogo.cn/mmbiz_png/DBwJzibicWPjH3uBYLQZwMwJWlic1qMauGpVTickVnziaRcrtkX6eyvSjLrj4rlgom1abT7Z7PG6ISHWMsXdFLibLVGQ/0?wx_fmt=png'); background-position: 0% 0%; padding: 0px 0px 0px 10px;">
    <section style="display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 0px 5px 5px; color: rgb(255, 255, 255); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; background-color: rgb(0, 184, 236);">
    `

let yFirstRight = `
    </section>
  </section>
</section>
</section>
    `

let ySecondLeft = `
<section data="左气泡">
  <section style="width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; padding: 5px 45px 10px 40px; background-position: 0% 0px;">
    <section style="background-repeat: no-repeat; background-size: 10px; box-sizing: border-box; overflow: hidden; background-position: 0% 0%; padding: 0px 0px 0px 10px;">
      <section style="display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 5px 5px 5px; color: rgb(255, 255, 255); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; background-color: rgb(0, 184, 236);">
 `

 let ySecondRight = `
      </section>
    </section>
  </section>
</section>
`

let mFirstLeft = `
<section data="右气泡">
<section style="width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; background-image: url('http://mmbiz.qpic.cn/mmbiz_png/6ias4WNGRIJl3NKqzCVG5l1FNyicFfibNS8wcIMIxR5r9uMJukmm8zEW0ySoQl9PT6kZLiasdic9b864WVkwxiaNYI1g/0?wx_fmt=png'); padding: 5px 40px 10px 45px; background-position: 100% 0px;">
  <section style="margin: 0px 10px; text-align: right;">兵小红</section>
  <section style="background-repeat: no-repeat; background-size: 10px; box-sizing: border-box; overflow: hidden; background-image: url('https://mmbiz.qlogo.cn/mmbiz_png/DBwJzibicWPjH3uBYLQZwMwJWlic1qMauGpSIaBu48EGzekUomBmX2YumMSaISSZC8Im6ACOictt2bib6c8BHicGqOsA/0?wx_fmt=png'); background-position: 100% 0%; padding: 0px 10px 0px 0px;">
    <section style="display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 5px 0px 5px 5px; color: rgb(255, 255, 255); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; float: right; background-color: rgb(239, 110, 126);">
`

let mFirstRight = `
    </section>
  </section>
</section>
</section>
`

let mSecondLeft = `
<section data="右气泡">
<section style="width: 100%; background-repeat: no-repeat; box-sizing: border-box; background-size: 40px; padding: 5px 40px 10px 45px; background-position: 100% 0px;">
  <section style="background-repeat: no-repeat; background-size: 10px; box-sizing: border-box; overflow: hidden; background-position: 100% 0%; padding: 0px 10px 0px 0px;">
    <section style="display: inline-block; max-width: 100%; min-height: 35px; padding: 5px 12px 6px; border-radius: 5px 5px 5px 5px; color: rgb(255, 255, 255); font-size: 16px; word-break: normal; word-wrap: break-word; box-sizing: border-box; float: right; background-color: rgb(239, 110, 126);">
`

let mSecondRight = `
    </section>
  </section>
</section>
</section>
`

const injectHtml = [[[yFirstLeft, yFirstRight], [ySecondLeft, ySecondRight]], [[mFirstLeft, mFirstRight], [mSecondLeft, mSecondRight]]];

function checkImgExists(imgurl) {  
    let ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;  
    //没有图片，则返回-1  
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
      return true;  
    } else {  
      return false;
    }   
}