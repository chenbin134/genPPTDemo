export default {
  defaultTemplate : { //  默认ppt模版
    /**
     * 创建slide_template = title_page 类型的 slide
     * @param pptx pptx
     * @param slide_content 本页填充内容
     */
    title_page_slide(pptx,slide_content){
      let slide = pptx.addSlide();
      slide.addText([
        {text : slide_content.main,options:{fontSize: 24,fontFace:'Arial',bold: true,color : '000000',align : 'center',breakLine : true}},
      ],
      {x : 0.5,y : 1,w: 12.3,h:4,fill : {color : 'F1F1F1'},isTextBox : true}
      );
      slide.addText([
        {text : slide_content.sub , options : {fontSize: 20,color:'333333',align : 'center',breakLine : true,margin : 20,isTextBox : true}},
      ],
      {x : 0.5,y : 5,w : 12.3,h:1,fill : {color : 'F1F1F1'}}
      );
      return slide;
    },
    /**
     * 创建content_bullets类型slide
     */
    content_bullets_slide(pptx,slide_content){
      let slide = pptx.addSlide();
      slide.addText(slide_content.title,{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      let totalStrLength = 0;
      let bullets = slide_content.bullets;
      let textArr = [];
      bullets.forEach(bulletItem => {
        let bulletTitle = {
          text : bulletItem[0].text,
          options:{
            bullet: true,
            color : '000000',
            bold : bulletItem[0].style == 'B' ? true : false
          }
        }
        let bulletContent = {
          text : bulletItem[1].text,
          options:{
            color : '000000',
            bold : bulletItem[1].style == 'B' ? true : false
          }
        }
        textArr.push(bulletTitle,bulletContent);
        totalStrLength = totalStrLength + bulletItem[0].text.length + bulletItem[1].text.length;
      })
      let options = {
        x : 0.5,
        y : 1,
        w: 12.3,
        h:6,
        fill : {color : 'F1F1F1'},
        isTextBox : true,
        valign : 'top',
        fontFace : 'Arial',
        fontSize : totalStrLength > 1200 ? 10 : 18,// 1200 个英文字符 18号字；> 1200 < 2600 ,10号字；
        margin:20,
        lineSpacing : totalStrLength > 1200 ? 23 : 30
      }
      slide.addText(textArr,options);
      return slide;
    },
    /**
     * content_figure
     */
    content_figure_slide(pptx,slide_content){
      let slide = pptx.addSlide();
      slide.addText(slide_content.title,{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      let bullets = slide_content.bullets;
      let textArr = [];
      let totalStrLength = 0;
      bullets.forEach(bulletItem => {
        let bulletTitle = {
          text : bulletItem[0].text,
          options:{
            bullet: true,
            color : '000000',
            bold : bulletItem[0].style == 'B' ? true : false
          }
        }
        textArr.push(bulletTitle);
        totalStrLength = totalStrLength + bulletItem[0].text.length;
      })
        let options = {
        x : 0.5,
        y : 1,
        w: 12.3,
        h:6,
        fill : {color : 'F1F1F1'},
        isTextBox : true,
        valign : 'top',
        fontFace : 'Arial',
        fontSize : totalStrLength > 420 ? 10 : 16,
        margin:15,
        lineSpacing : totalStrLength > 420 ? 20 : 25
      }
      slide.addText(textArr,options);
      let figure = slide_content.figure;
      let legend = slide_content.legend;
      slide.addImage({ path: figure ,x:1.5, y:2.7, w:9.5, h:4 });
      slide.addText(legend,{
        x : 0.5,
        y : 7,
        w : 12.3,
        h : 0.3,
        isTextBox : true,
        fontSize : 10,
        fontFace : 'Arial',
        valign : 'center',
        margin: 15,
        lineSpacing : 20,
      });
      return slide;
    },
    /**
     * content_table
     */
    content_table_slide(pptx,slide_content){
      let slide = pptx.addSlide();
      slide.addText(slide_content.title,{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      let bullets = slide_content.bullets;
      let textArr = [];
      let totalStrLength = 0;
      bullets.forEach(bulletItem => {
        let bulletTitle = {
          text : bulletItem[0].text,
          options:{
            bullet: true,
            color : '000000',
            bold : bulletItem[0].style == 'B' ? true : false
          }
        }
        textArr.push(bulletTitle);
        totalStrLength = totalStrLength + bulletItem[0].text.length;
      })
        let options = {
        x : 0.5,
        y : 1,
        w: 12.3,
        h:6,
        fill : {color : 'F1F1F1'},
        isTextBox : true,
        valign : 'top',
        fontFace : 'Arial',
        fontSize : totalStrLength > 420 ? 10 : 16,
        margin:15,
        lineSpacing : totalStrLength > 420 ? 20 : 25
      }
      slide.addText(textArr,options);
      let {colnames,cells} = slide_content.table;
      colnames = colnames.map(col => {
        return {
          text : col,
          options: {
            color : 'ffffff',
            fill : '6096e6',
            bold : true
          }
        }
      })
      let rows = [colnames,...cells];
      slide.addTable(rows,{
        x : 0.6,
        y : 2.7,
        w : 12,
        border: { type : 'solid',pt : 1,color:'ffffff'},
        fill : 'd2ddf5',
        autoPage : true,
        autoPageRepeatHeader : true,
      });
      let legend = slide_content.legend;
      slide.addText(legend,{
        x : 0.5,
        y : 7,
        w : 12.3,
        h : 0.3,
        isTextBox : true,
        fontSize : 10,
        fontFace : 'Arial',
        valign : 'center',
        margin: 15,
        lineSpacing : 20,
      });
      return slide;
    },
  }
}