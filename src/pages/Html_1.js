import React,{ useState } from 'react';
import AmHtml_1 from '../lang/AmHtml_1';
import RuHtml_1 from '../lang/RuHtml_1';

function Html_1() {
  
  const [language, setLanguage] = useState('en'); // по умолчанию язык выбран английский

  const handleEnglishClick = () => {
    setLanguage('en');
  };

  const handleRussianClick = () => {
    setLanguage('ru');
  };

  const handleArmenianClick = () => {
    setLanguage('am');
  };
  
  return (
    <div className='java-script'>
        
        <div>
        <button onClick={handleEnglishClick}>English</button>
        <button onClick={handleRussianClick}>Russian</button>
        <button onClick={handleArmenianClick}>Armenian</button>
      </div>
      {language === 'en' && (
        <div>

        <h1>HTML</h1>
     
     <p>
     HTML, which stands for HyperText Markup Language, is a markup language used to create and structure content on the web. It is the backbone of every website and serves as the building blocks of web pages. HTML is a declarative language, meaning it is used to describe the content and structure of a web page, but not necessarily its appearance.    
    </p>   
    <p>
    HTML was created by Tim Berners-Lee in the early 1990s while working at CERN, the European Organization for Nuclear Research. Berners-Lee was looking for a way to share and organize information among researchers, and HTML was the solution he came up with. HTML was designed to be a simple language that could be easily understood and used by anyone, regardless of their technical background.    
    </p>

    <p>
    HTML is made up of a series of elements, which are represented by tags. Tags are enclosed in angle brackets and are used to define the structure and content of a web page. For example, the {'<head>'} tag is used to define the head section of a web page, which typically contains information such as the title of the page and links to external stylesheets and scripts. The {'<body>'} tag is used to define the body section of a web page, which contains the main content of the page.     
    </p>

    <p>
    HTML is a constantly evolving language, with new versions being released periodically. The current version of HTML is HTML5, which was released in 2014. HTML5 introduced many new features and capabilities, such as video and audio tags, canvas elements for drawing graphics, and semantic tags for better accessibility and SEO.     
    </p>

    <p>
    In summary, HTML is a markup language used to create and structure content on the web. It was created by Tim Berners-Lee in the early 1990s and is the backbone of every website. HTML is made up of a series of elements represented by tags, and it is a constantly evolving language with new versions being released periodically.     
    </p>

    <p>1. Simple web page with a title and paragraph:</p>
    <code>
   <p><b>{'<!DOCTYPE html>'}</b></p>

   <p><b>{'<html>'}</b></p> 

   <p><b>{'<head>'}</b></p> 

    <p><b>{'<title>My Web Page</title>'}</b></p> 

   <p><b>{'</head>'}</b></p> 

   <p><b>{'<body>'}</b></p>

   <p><b>{'<h1>Welcome to My Web Page</h1>'}</b></p>

   <p><b>{'<p>This is my first web page.</p>'}</b></p>

   <p><b>{'</body>'}</b></p>

   <p><b>{'</html>'}</b></p>

   </code>

   <p>
   This is an example of a simple web page that consists of a title and a paragraph. The title is represented by the "title" tag, and the paragraph by the "p" tag. The page title is displayed in the browser's title bar and in search engine results.  
   </p>

    <p>2. Image with alternative text and a link to another page:</p>

 
     <code>
     <p><b>{'<!DOCTYPE html>'}</b></p>
       
       <p><b>{'<html>'}</b></p> 
       
       <p><b>{'<head>'}</b></p>  
       
       <p><b>{'<title>My Web Page</title>'}</b></p> 
       
       <p><b>{'</head>'}</b></p> 
       
       <p><b>{'<body>'}</b></p> 
       
       <p><b>{'<h1>Welcome to My Web Page</h1>'}</b></p> 
       
       <p><b>{'<p>This is a picture of a cat:</p>'}</b></p> 
       
       <p><b>{'<img src="cat.jpg" alt="A cute cat">'}</b></p> 

       <p><b>{'<p>Click <a href="http://www.google.com">here</a> to go to Google.</p>'}</b></p> 

       <p><b>{'</body>'}</b></p> 

       <p><b>{'</html>'}</b></p>
     </code>

    

    <p>This example includes an image of a cat, represented by the "img" tag, with alternative text displayed in case the image cannot be loaded. The link to Google is represented by the "a" tag with the "href" attribute pointing to the URL of the destination page.</p>

    <p>3. Form for entering a name and submitting data to a server:</p>

  
    <code>
    <p><b>{'<!DOCTYPE html>'}</b></p> 

<p><b>{'<html>'}</b></p>   

<p><b>{'<head>'}</b></p>  

<p><b>{'<title>My Web Page</title>'}</b></p>  

<p><b>{'</head>'}</b></p>  

<p><b>{'<body>'}</b></p>  

<p><b>{'<h1>Welcome to My Web Page</h1>'}</b></p>  

<p><b>{'<form>'}</b></p>  

<p><b>{'<label for="name">Enter your name:</label>'}</b></p>  

<p><b>{'<input type="text" id="name" name="name"><br><br>'}</b></p>  

<p><b>{'<input type="submit" value="Submit">'}</b></p>  

<p><b>{'</form>'}</b></p>  

<p><b>{'</body>'}</b></p>  

<p><b>{'</html>'}</b></p>   
    </code>
 

    <p>
    This example shows a form with a text input field for the user to enter their name. When the form is submitted, the data is sent to a server for processing. The "label" tag provides a text label for the input field, and the "input" tag is used to create the input field and the submit button.      
    </p>

    <p>4. Ordered list of items:</p>

    
    <code>
    <p> <b>{'<!DOCTYPE html> '}</b></p>

<p><b>{'<html> '}</b></p>

<p><b>{'<head>'}</b></p>

<p><b>{'<title>My Web Page</title>'}</b></p>

<p><b>{'</head>'}</b></p>

<p><b>{'<body>'}</b></p>

<p><b>{'<h1>Welcome to My Web Page</h1>'}</b></p>

 <p><b>{'<h2>My favorite foods:</h2>'}</b></p>

 <p><b>{'<ol>'}</b></p>

 <p><b>{'<li>Pizza</li>'}</b></p>

 <p><b>{'<li>Burgers</li>'}</b></p>

 <p><b>{'<li>Ice cream</li>'}</b></p>

 <p><b>{'</ol>'}</b></p>

 <p><b>{'</body>'}</b></p>

   <p><b>{'</html>'}</b></p>

    </code>
 

<p>This example shows an ordered list of items represented by the "ol" tag, with each item represented by the "li" tag. The numbers for the list are automatically generated by the browser.</p>

<p>5. Unordered list of items:</p>

 
  <code>
  <p> <b>{'<!DOCTYPE html> '}</b></p>

<p><b>{'<html> '}</b></p>

<p><b>{'<head>'}</b></p>

<p><b>{'<title>My Web Page</title>'}</b></p>

<p><b>{'</head>'}</b></p>

<p><b>{'<body>'}</b></p>

<p><b>{'<h1>Welcome to My Web Page</h1>'}</b></p>

 <p><b>{'<h2>My favorite movies:</h2>'}</b></p>

 <p><b>{'<ul>'}</b></p>

 <p><b>{'<li>>The Shawshank Redemption</li>'}</b></p>

 <p><b>{'<li>The Godfather</li>'}</b></p>

 <p><b>{'<li>The Dark Knight</li>'}</b></p>

 <p><b>{'</ul>'}</b></p>

 <p><b>{'</body>'}</b></p>

   <p><b>{'</html>'}</b></p>  
  </code>
      
      <p>This example shows an unordered list of items represented by the "ul" tag, with each item represented by the "li" tag. The list items are displayed with bullet points by default.</p> 

      <p>
      To further enhance their understanding of HTML, students can be directed to additional resources such as the documentation on <b>MDN Web Docs</b> or <b>W3Schools</b>.
      </p> 

     <p>To add a link to MDN Web Docs on your website, use the following HTML code:</p> 

    <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML "target='_blank'> <b> &#x1F44D; MDN Web Docs</b></a></p> 
     
    <p>To add a link to W3Schools on your website, use the following HTML code:</p>  

    <p><a href="https://www.w3schools.com/html/" target='_blank' > <b>&#x1F44D; W3Schools</b></a></p>

    <p>Both MDN Web Docs and W3Schools provide comprehensive and detailed documentation on HTML and related technologies, as well as interactive tutorials and examples. Students can use these resources to deepen their knowledge of HTML and improve their web development skills.</p>

    </div>
      )}
      {language === 'ru' && (
        <div>
          <RuHtml_1 />
        </div>
      )}
      {language === 'am' && (
        <div>
          <AmHtml_1 />
        </div>
      )} 

    </div>
  )
}

export default Html_1;