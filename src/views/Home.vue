<template>
  <div class="home">
    <div>
      <button @click="genppt2">下载ppt</button>
      <div id="tableContainer">

      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import pptxgen from 'pptxgenjs'
import htmlparser2 from 'htmlparser2'
import { slideData } from  '../assets/slide1'
import { demoData } from '../assets/demo'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    // v1.0
    handleGenPPT(){
      
      let pptx = new pptxgen();
      pptx.layout = 'LAYOUT_WIDE';// 13.3 * 7.5

      let slide1 = pptx.addSlide();
      let title = slideData.title;
      let title_cn = slideData.title_cn;
      let journal  =  slideData.journal;
      let pubdate = slideData.pubdate;
      slide1.addText([
        {text : title,options:{fontSize: 24,fontFace:'Arial',bold: true,color : '000000',align : 'center',breakLine : true}},
        {text : title_cn,options:{fontSize : 24,fontFace:'Arial',bold: true,color: '000000',align : 'center',breakLine : true}},
      ],
      {x : 0.5,y : 1,w: 12.3,h:4,fill : {color : 'F1F1F1'},isTextBox : true}
      );
      slide1.addText([
        {text : journal , options : {fontSize: 20,color:'333333',align : 'center',breakLine : true,margin : 20,isTextBox : true}},
        {text : pubdate,options: {fontSize:20,color:'333333',align : 'center'}}
      ],
      {x : 0.5,y : 5,w : 12.3,h:1,fill : {color : 'F1F1F1'}}
      );

      let slide2 = pptx.addSlide();
      let pmid = slideData.pmid;
      let doi = slideData.doi;
      let keywords = slideData.keywords.join('、');
      slide2.addText('论文发表信息',{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      slide2.addText([
        {text : 'PMID：',options:{bullet: true,color : '000000',bold : true}},
        {text : pmid,options:{color : '000000'}},
        {text : 'DOI：',options:{bullet: true,color : '000000',bold : true}},
        {text : doi,options:{color : '000000'}},
        {text : '期刊：',options:{bullet: true,color : '000000',bold : true}},
        {text : journal,options:{color : '000000'}},
        {text : '发表日期：',options:{bullet: true,color : '000000',bold : true}},
        {text : pubdate,options:{color : '000000'}},
        {text : '关键词：',options:{bullet: true,color : '000000',bold : true}},
        {text : keywords,options:{color : '000000'}},
      ],
      {x : 0.5,y : 1,w: 12.3,h:6,fill : {color : 'F1F1F1'},isTextBox : true,valign : 'top',fontFace : 'Arial',fontSize : 18,margin:20,lineSpacing : 30}
      );


      let slide3 = pptx.addSlide();
      let authors = this.genAuthorsList(slideData.authors);
      let affiliations = this.genAffiliations(slideData.affiliations);
      slide3.addText('作者信息',{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      slide3.addText([
        {text : '作者列表：',options:{bullet: true,color : '000000',bold : true}},
        {text : authors,options:{color : '000000'}},
        {text : '单位列表：',options:{bullet: true,color : '000000',bold : true}},
        ...affiliations
      ],
      {x : 0.5,y : 1,w: 12.3,h:6,fill : {color : 'F1F1F1'},isTextBox : true,valign : 'top',fontFace : 'Arial',fontSize : 18,margin:20,lineSpacing : 23}
      )


      let slide4 = pptx.addSlide();
      let abstract_list = this.genAbstract(slideData.abstract_list);
      let fontSize = slideData.abstract.length > 1600 ? 10 : 18
      slide4.addText('文献摘要',{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      slide4.addText(abstract_list,
      {x : 0.5,y : 1,w: 12.3,h:6,fill : {color : 'F1F1F1'},isTextBox : true,valign : 'top',fontFace : 'Arial',fontSize : fontSize,margin:10,lineSpacing : 23}
      );

      let slide5 = pptx.addSlide();
      slide5.addText('图片',{x : 0.5,y : 0.3,h : 0.5,w : 12.3,fontFace : 'Arial',fontSize : 32,breakLine : true});
      slide5.addImage({ path: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg" ,x:5.1, y:3.8, w:3.0, h:2.78 });

      


      pptx.writeFile('slide1');
      
    },
    // pptxgenjs: https://gitbrent.github.io/PptxGenJS/
    // v2.0
    genppt2(){
      console.log('start')
      let pptx = new pptxgen();
      pptx.layout = 'LAYOUT_WIDE';// 13.3 * 7.5
      let ppt_content = demoData.ppt_content;
      ppt_content.forEach(slideItemObj => {
        let slideTemplate = slideItemObj.slide_template;
        let slideContent = slideItemObj.slide_content;
        let fnName = slideTemplate + '_slide';
        this[fnName].call(this,pptx,slideContent);
      })
      pptx.writeFile('slide1').then(res => {
        console.log('done')
      })
    },
    /**
     * title_page
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
     * content_bullets
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


    // 生成作者列表文本
    genAuthorsList(list) {
      let authors = [];
      list.forEach(item => {
        authors.push(`${item[1]} ${item[0]}`)
      });
      return authors.join('、')
    },
    // 生成单位列表
    genAffiliations(list){
      let affiliations = [];
      let fontSize = list.length > 5 ? (list.length < 12 ? 14 : 10) : 18;// 根据内容数量调整字号，确保全部显示
      list.forEach((item,index) => {
        affiliations.push({text : item[1],options:{color : '000000',bullet : {type : 'number'},fontSize : fontSize}})
      })
      return affiliations;
    },
    // 生成文章摘要
    genAbstract(list){
      // {text : 'PMID：',options:{bullet: true,color : '000000',bold : true}},
      //   {text : pmid,options:{color : '000000'}},
      let abstractList = [];
      list.forEach(item => {
        abstractList.push({text : `${item[0]}：`,options:{bullet: true,color : '000000',bold : true}})
        abstractList.push({text : `${item[1]}：`,options:{color : '000000'}})
      })
      return abstractList;
    }
  },
}
</script>
