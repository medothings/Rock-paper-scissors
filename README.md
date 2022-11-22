# The rock paper scissors project
Anyway, before I start talking about all the boring stuff that I was forced to write, go visit [the live weblink]().    
Also you should probbaly know that this page is based on [Project: Landing Page](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) of the [Foundatins Course](https://www.theodinproject.com/paths/foundations/courses/foundations) from [the Odin Project](https://www.theodinproject.com)
## Console version
### What I learnt from creating this page
- How to choose a random word, rock, paper, or scissors
```js
const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
```
- To try not to use global variables as much as often in case I use the same name for different variables in different functions
- To use the return function so that I can use the same value in different functions
- How to make a popup so that users can answer a question
```js
prompt("Choose your weapon. Rock, paper, or scissors?");
```
- To use `Shift+control+F` to make the code "prettier" after installing the extension called "Prettier - Code formatter" (Also I'm not very sure if the actual name is "prettier" but my dad calls it that so I will too)
- When writing a loop, the `for loop` is usually when you know how many times to loop the code, and the `while loop` is usually for when you dont know how many times to loop (can't really think of an example right now, so you should probably just go see other people's code)
- When adding a number to a value, use `++` to add one, or `+=[number]`(but without the square bracket)
- For the `if condition`, `and` is written as `&&` and `or` is written as `||`
- Always but the link to js at the end of the html code (but still in the body) because...well...uh... *searches up why* 
  - Ok, so apparently, you have to give the html code to load before linking to js...or something like that
  - Also because if you don't, then the html won't be linked to the js file
- Try to define the functions before you call it
  - Becuase my dad said so
- "==" and "===" are practically the same thing. They both work fine
- Use "const" when you can, use "let" when the variable doesn't change, and don't even think about using "var"
  - Because my dad said so
- Also something interesting I learnt while writing this and the previous READMEs, the "'" is always further than you think it is.
  - I mean, when I'm writing "don't"(even though technically, I should be using do not, though I'm pretty confident that no one likes to read boring files, so I try to keep it casual), I am constantly writing "don;t", then I have to go delete the ";" and then type in the "'"
- Last thing, my dad knows a lot

### Ideas for future developement
Well right now, I only have the console version, so the future development is pretty easy

- Add code to html and css to add things to the page

### Credits
I didn't have any pictures or icons yet, so

-Nil

### Issues
Well, I'd say

- Nil

## On screen version
This "On screen version" is basically what I did previously except that everything is on the screen and not in the console (if that isn't clear enough from the name)

### What I learnt
- To always remember to link the js code to html before writing in the html
  - From my experience, I put so much code (ok not that much, but it felt like a lot) in my js code, but it wasn't working. So then I had to find out why, and surprise surprise, turned out I forgot to link it. Ha, silly me.
- When I have a piece of code that will be linked with js, it is always better to have `id`s. Why you ask? Becuase.
- When the js code is gonna be really long, it's perhaps wiser to leave the css for later. But that could just be personal preference since people usually do html first, then css, and lastly js
- How to make a box have an outline such that the border is dashed 
``` css
border: 5px dashed purple;
```
- For the js code, the console version and the on screen version is...very different. Here's some examples
  - I had to remove a whole function that took up at least 20 lines of code (if you want to see, it is commented out)
  - I had to create a whole new function (which is just as long as the commented out one) from scratch, which I did not appreciate
  - I had to add so many lines of code to functions that I thought were finished
- Functions are really really annoying and take a long time to write and also use a lot of brain power
- `innerText` is used to change the content inside a div on screen
``` js
const msgEl = document.getElementById("message"); // Don't forget this line
let message; //Also I'm not very sure why I need to make this variable, but the code didn't work without it, so here you go
message = "Tie" + "\n";
msgEl.innerText = message;
```
- When you want several lines of `innerText`, you have to add a `=+` instead of just `=` because if you only put `=`, then you will only ever be able to see the last bit, since the first parts showed really quickly, but then disappeared so that the last bit can show on screen. If you have no idea what I mean, just use Google. It's there for a reason
- Also when you want several lines of `innerText`, remember to put a `"\n"` (yes, the `\n` has to be in a `""`) so that the innerText will go to the next line to continue implementing
- Remember to clear what you showed on screen in your `innerText` by using `message = "";`
- Sometimes, during certain circumtances, you just have to write the same piece of code (that are not exactly the same, but is very similar) many times. Here's an example to show you what I mean (also don't mind what I wrote in the code)
``` js
if (index === 0) {
    cmpRockEl.classList.add("clicked");
    cmpPaperEl.classList.remove("clicked");
    cmpScissorsEl.classList.remove("clicked");
  } else if (index === 1) {
    cmpPaperEl.classList.add("clicked");
    cmpRockEl.classList.remove("clicked");
    cmpScissorsEl.classList.remove("clicked");
  } else if (index === 2) {
    cmpScissorsEl.classList.add("clicked");
    cmpRockEl.classList.remove("clicked");
    cmpPaperEl.classList.remove("clicked");
  }
```
- `addEventListener` is actually pretty comfusing. It's easy to use, but when it comes to understanding it, I actually don't really understand the `() => {}`
``` js
rockBtn.addEventListener("click", () => {
    //Stuff in code
  });
```
- Instead of `query()`, `alert()` does also exist
- Ok the following I didn't really learn, but I did include becuase it's there, and it helps, and I did get to know a little bit of it, so. Here's a little bit of back story. Bascially, there was a problem with my code. Even though I had scored 5, the score still showed 4 because the alert popped up to fast, so I had to delay a bit. So I made a function (well, my dad made a function) called `delay(time)`. Since I honestly don't understand it, here's the code:
``` js
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```
and then after that I have to call the function, so 

``` js
await delay(1000);
```
...yeah
Not really sure what that means, but, I guess I'll just learn it...sometime
- Last thing, having your dad sick when you need help with your code is not good

### Ideas for future development
- Try to make the screen look better because right now, it is looking bleh

### Credits
- Rock, paper, and scissors button by [Freepik](https://www.flaticon.com/authors/freepik) from [Flaticon](https://www.flaticon.com/)

### Issues
- The only issue, if it is even counted as one, is that the look of the website is kinda bleh, as I mentioned before