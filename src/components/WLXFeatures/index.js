import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import CodeBlock from '@theme/CodeBlock';


import ezGif from '@site/static/img/ezgif.com-crop-3.gif';
import todoGif from '@site/docs/img/Carrots-ezgif.com-video-to-gif-converter.gif';
import balls from '@site/docs/img/ezgif.com-video-to-gif-30.gif'
import plotGif from '@site/docs/img/ScreenRecording2024-02-15at22.42.49-ezgif.com-optimize.gif'

const FeatureList = [
  {
    title: 'Write components with code and markup',
    width: 'col col--6',
    feature: (
      <>
      <CodeBlock language="jsx" showLineNumbers>
{`Heading[Text_] := <h2 class="tracking-tight"><Text/></h2>;

<body>
  <Heading>
    Hello World!
  </Heading>
</body>`}
      </CodeBlock>        
        
      </>
    ),
    description: (
      <>
        HTML is simple, human-readable and straighforward. Having an XML nature it allows to write Wolfram Expressions as tags.
      </>
    ),
  },

  {
    title: 'Full-featured web framework for Wolfram Language',
    width: 'col col--6',
    feature: (
      <>

      <img width={"100%"} src={todoGif}/>      
        
      </>
    ),
    description: (
      <>
        Build a component with a shared, local or global state and predictable data synchronization.
      </>
    ),
  },   

  {
    title: 'A superset over WL and XML',
    width: 'col col--5',
    feature: (
      <>
      <div className="row align--center padding-horiz--md" style={{'display':'flex'}}>
        <div className={clsx('col col--6')}>
      <CodeBlock title="Regular WL expression" language="wolfram" showLineNumbers>
{`TextString[Now]`}
      </CodeBlock>  
      </div>   

      <div className={clsx('col col--6')}>
      <CodeBlock title="WLX expression" language="jsx" showLineNumbers>
{`<TextString>
  <Now/>
</TextString>`}
      </CodeBlock> 
      </div>
      </div>         
      </>
    ),
    description: (
      <>
        <b>First child element is a first argument</b> of a given function and etc. Any self-closing tags represent an own-value or down-value with options of a symbol. Outside XML tags any WL expression is valid.
      </>
    ),
  },
  
  {
    title: 'Passing HTML/XML attributes',
    width: 'col col--6',
    feature: (
      <>
      <CodeBlock language="jsx" showLineNumbers>
{`ClassName = "show";

<div class="{ClassName} flex" style="color: cyan">
      Some text...
</div>`}
      </CodeBlock>     

      <CodeBlock language="jsx" showLineNumbers>
{`Component[OptionsPattern[]] := With[{
  Label = OptionValue["Label"]
}, 
  <h1><Label/></h1>
]

<Component Label={"Hello World!"}/>`}
      </CodeBlock>           
        
      </>
    ),
    description: (
      <>
        A symbol <i>ClassName</i> wrapped inside <b>&#123; &#125;</b> passed as an attrbitue to a normal HTML tag. For a normal WL function a passed XML attribute counts as an option. Unlike JSX it does not restric you on writting normal HTML, CSS, JS in the same text.
      </>
    ),
  },  

  {
    title: 'Use with or without Javascript',
    width: 'col col--6',
    feature: (
      <>
 

        <img style={{'margin' : 'auto', 'padding-bottom':'1rem', 'display':'flex'}} width={"70%"} src={balls}/>  
        
      </>
    ),
    description: (
      <>
        It's your choice if you need more control over components, DOM manipulation. If not you - can still produce fancy results using bare minimum of CSS, HTML and WL. 
      </>
    ),
  },  

  {
    title: 'Take the most from both ecosystems',
    width: 'col col--6',
    feature: (
      <>
      <CodeBlock language="jsx" showLineNumbers>
{`Columns = Table[
    <div class="lg:pr-4">
      <div class="text-base leading-7 text-gray-700 ">
        <Child/>
      </div>
    </div>
, {Child, $Children}]
  
<div class="row">
  <Columns/>
</div>`}
      </CodeBlock>        
        
      </>
    ),
    description: (
      <>
        HTML/XML is a markup language by its nature. Therfore it is recommended not to use explicitly Table or If expressions inside XML tags, but rather utilize Wolfram Language for that.
      </>
    ),
  },

  {
    title: 'Components approach',
    width: 'col col--5',
    feature: (
      <>
      <div className="col align--center padding-horiz--md">
        <div>
      <CodeBlock title="App.wlx" language="jsx" showLineNumbers>
{`Header := ImportComponent["Header.wlx"];
(* /* use it as WL expression */ *)
<body>
  <Header Title={"WLX is awesome"} />
</body>
`}
      </CodeBlock>  
      </div>   

      <div>
      <CodeBlock title="Header.wlx" language="jsx" showLineNumbers>
{`Title = $Options["Title"];
<h1>
  <Title/>
</h1>`}
      </CodeBlock> 
      </div>
      </div>         
      </>
    ),
    description: (
      <>
        All imported wlx scripts <b>are scoped</b>, i.e. defined variables inside a component <b>will not leak to the global scope</b>. You can keep all logic, template and even controllers are within the same file or folder.
      </>
    ),
  },  
  {
    title: 'Events system and dynamic symbols',
    width: 'col col--6',
    feature: (
      <>
      <CodeBlock language="jsx" showLineNumbers>
{`text     = "nothing";
View     = TextView[Offload[text]];
Button   = InputButton["Press me"]; 

EventHandler[Button, Function[Null, 
  text = RandomWord[]
]];

<div>
    <WLJS><View/></WLJS>
    <WLJS><Button/></WLJS>
</div>`}
      </CodeBlock>  

      <img style={{'margin' : 'auto', 'padding-bottom':'1rem', 'display':'flex'}} width={"80%"}  src={ezGif}/>      
        
      </>
    ),
    description: (
      <>
        
      </>
    ),
  }, 

  {
    title: 'Plots like Mathematica, but on a Web',
    width: 'col col--6',
    feature: (
      <>
      <div className="col align--center padding-horiz--md">
        <div style={{"text-align": "center"}}>
        
        <img style={{'margin' : 'auto', 'padding-bottom':'1rem', 'display':'flex'}} width={"80%"} src={plotGif}/> 
        </div>
        <div>
      <CodeBlock language="jsx" showLineNumbers>
{`Graph = Plot[Sin[x], {x, -2Pi, 2Pi}];

<figure style="display: inline-block">
    <WLJS Class={"h-auto max-w-full flex rounded-lg p-3 bg-gray-100"}>
        <Graph/>
    </WLJS>
    <figcaption class="text-center gap-x-4 min-w-0 mt-1 text-xs leading-5 text-gray-500">Drag - pan, wheel - zoom</figcaption>
</figure>
`}
      </CodeBlock>  
      </div>   
      </div>         
      </>
    ),
    description: (
      <>
        There are built-in Javascript libraries, which recreate Mathematica's <b>Graphics</b> and <b>Graphics3D</b> features.
      </>
    ),
  },

  {
    title: 'WebUI Library',
    width: 'col col--5',
    feature: (
      <>

      <CodeBlock language="jsx" showLineNumbers>
{`EventHandler["button", Print];

<div>
  <button id="btn" type="button">Click Me!</button>
  <WebUIEventListener Id={"btn"} Event={"button"} />
</div>
`}
      </CodeBlock>  
           
      </>
    ),
    description: (
      <>
        A set of small components are willing to help your buttons, sliders come alive.
      </>
    ),
  },    

];

function Feature({feature, title, description, width}) {
  return (
    <div className={clsx(width)} style={{"padding-top": "1em"}}>
      <div>
        {feature}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 style={{"color": "var(--ifm-color-primary)"}}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
