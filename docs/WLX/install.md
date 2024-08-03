---
sidebar_position: 1
---
# Installation
<h4 style={{"color": "#2dd4bf"}}><a href={"https://github.com/JerryI/wl-wlx"}>Github repository</a></h4>

import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';


In general, WLX is just a text-processor, everything else comes as an extensions. For the installation one can use a native Paclet manager of Wolfram Language or [LPM](https://github.com/JerryI/wl-localpackages)

<Tabs  
defaultValue="lpm"  
values={[  
{label: 'LPM', value: 'lpm'},  
]}>   
<TabItem value="lpm">

```mathematica
(* this script downloads and saves it to a local folder *)
Uncompress["1:eJx1T8tuwjAQDBT1wo0/6Ac0vveKKAoNCJoDZ5NugsXGtrwbBf6edawKLlzG+5rxzMfJ/TZvWZbRVKBomkms5wLfBmF1NcR0qN6lL/fbfMC0j4Q18
PM80mkmcDR8TlexK0Ug7SKnAh5f9F0aRoGi8y5wVUp5Zvb0pVTQQ96KTn/qCULtLIPlvHad2kAIt0IN+Imu1uh1fdEtkOq0seoHggVUydForuJgbJsCLgSWTj7r7d/q6gMQGWfT
Lt7KLPp4ZPq3+qz0Iv6Yddcj3gGoDVPG"];

PacletRepositories[{
	Github -> "https://github.com/JerryI/wl-wlx"
}]

<<JerryI`WLX`
<<JerryI`WLX`Importer`

```

</TabItem>  
</Tabs>

:::info
There is no need in a licensed Mathematica, the library only requires Wolfram Kernel, that also ships together with a freeware Wolfram Engine / Script.
:::

WLX processor has only one public function

```mathematica
ProcessString["
	Str = \"Hello World\";

	<h1><Str/></h1>
"]
```

See basics on the next page to learn how to write WLX scripts

## Development server
:::tip
It is optional and is up to your application, however, running an HTTP server locally to see the changes in WLX script you made will be much more convenient, than exporting static `HTML` pages to a file.
:::

We would recommend a high-performance server built by [@KirillBelovTest](https://github.com/KirillBelovTest) running on a custom written TCP sockets library.

<details>  
<summary>A shortcut</summary>  

If you have git installed. Simply clone 

```bash
git clone https://github.com/JerryI/wl-wlx
cd wl-wlx
wolframscript -f Examples/Basic/Basic.wls
```

that will run the simplest example possible

</details>

Here is a boilerplate code, that just works out from the box

```mathematica
(* package manager to make sure you will get the right version *)
Uncompress["1:eJx1T8tuwjAQDBT1wo0/6Ac0vveKKAoNCJoDZ5NugsXGtrwbBf6edawKLlzG+5rxzMfJ/TZvWZbRVKBomkms5wLfBmF1NcR0qN6lL/fbfMC0j4Q18
PM80mkmcDR8TlexK0Ug7SKnAh5f9F0aRoGi8y5wVUp5Zvb0pVTQQ96KTn/qCULtLIPlvHad2kAIt0IN+Imu1uh1fdEtkOq0seoHggVUydForuJgbJsCLgSWTj7r7d/q6gMQGWfT
Lt7KLPp4ZPq3+qz0Iv6Yddcj3gGoDVPG"];

(* setting the directory of the project *)
SetDirectory[If[StringQ[NotebookDirectory[]], NotebookDirectory[], DirectoryName[$InputFileName]]]

PacletRepositories[{
	Github -> "https://github.com/KirillBelovTest/Objects",
	Github -> "https://github.com/JerryI/Internal",
	Github -> "https://github.com/JerryI/CSocketListener" -> "dev2024",
	Github -> "https://github.com/JerryI/TCPServer",
	Github -> "https://github.com/JerryI/HTTPHandler",
	Github -> "https://github.com/JerryI/wl-wlx" 
}]


<<KirillBelov`CSockets`
<<KirillBelov`Objects`
<<KirillBelov`Internal`
<<KirillBelov`TCPServer`

<<KirillBelov`HTTPHandler`
<<KirillBelov`HTTPHandler`Extensions`

(* WLX scripts *)
<<JerryI`WLX`
<<JerryI`WLX`Importer`


Print["Staring HTTP server..."];

tcp = TCPServer[];
tcp["CompleteHandler", "HTTP"] = HTTPPacketQ -> HTTPPacketLength;
tcp["MessageHandler", "HTTP"] = HTTPPacketQ -> http;

index := ImportComponent["Index.wlx"];

http = HTTPHandler[];
http["MessageHandler", "Index"] = AssocMatchQ[<|"Method" -> "GET"|>] -> Function[x, index[x]]

SocketListen[CSocketOpen["127.0.0.1:8010"], tcp@# &];

"open http://127.0.0.1:8010/"//Print;
While[True, Pause[0.1]];
```

:::info
Please, save your notebook or `.wls` script to some directory
:::

This code will run an http server at `127.0.0.1:8010` and serve a single file `Index.wlx`. Therefore you should __open the root folder of your script or notebook__ and create the following file

```mathematica title="yourproject/Index.wlx"
Main := ImportComponent["Main.wlx"];
<Main Request={$FirstChild}/>
```

This will redirect the request to `Main.wlx`, where you application will be located. It forces Wolfram Kernel to dynamically import it every-time you open a web-page, unlike `Index.wlx`, which was imported once and cached at the startup.

```jsx title="yourproject/main.wlx"
(* /* HTML Page */ *)

<html> 
    <head>
        <title>WLX Template</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>           
    </head>  
    <body> 
        <div class="min-h-full">
            <header class="bg-white shadow">
                <div class="flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Title</h1>
                </div>
            </header>
            <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    Local time <TextString><Now/></TextString>
                </div>
            </main>
        </div>
    </body>
</html>
```

:::info
Every-time you change something at `Main.wlx`, the result will be shown once you refresh the page in your browser. 
:::

Here for the more appealing look, a well-known [Tailwind CSS](https://tailwindcss.com) framework is used. The expected result is shown below

![](../img/Screenshot%202023-08-10%20at%2011.38.21.png)

