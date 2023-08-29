<h1>There are different way to add props</h1>

<p>Now we have different ways to initialize props in React</p>

<ul>
<li>
<p>First Method:
<code>
function ProfileCard(props){
    return (
    <div>
        <p>My name is: {props.color} and his age is {props.handle}</p>
    </div>
)
}
</code>
</p>
</li>
<li>
<p>Second Method:
<code>
function ProfileCard(props){
    const {title,handle} = props
    return (
    <div>
        <p>My name is: {title} and his age is {handle}</p>
    </div>
)
}
</code>
</p>
</li>
<li>
<p>Third Method:
<code>
function ProfileCard(props){
    const title = props.title
    const handle = props.handle
    return (
    <div>
        <p>My name is: {title} and his age is {handle}</p>
    </div>
)
}
</code>
</p>
</li>
<li>
<p>Fourth Method:
<code>
function ProfileCard({title,handle}){
    return (
    <div>
        <p>My name is: {title} and his age is {handle}</p>
    </div>
)
}
</code>
</p>
</li>
</ul>

<p>
DOWNLOAD "React Developer Tools" extension
</p>


<h1>Including Images</h1>

<p>
First we add images in src folder and after console.log we observe that one output is actually base64 and the other is static data file actually the difference is occur due to file size if file size is less then 9.7 kb then it will convert into base64 otherwise static data
</p>