<p><img src="https://raw.githubusercontent.com/projectdiv/div/main/art/logo.png" alt="div logo" height="30" width="auto" /></p>

# Say Hello to Div 👋

A website builder you’ll actually enjoy using. No more bloated frameworks, complicated configs, or dependency chaos. We're taking back the art and reclaiming the throne of crafting simple HTML websites 👑

## 🛠️ Setup in a Snap

Make sure you have <a href="https://nodejs.org" target="_blank">node</a> installed on your machine. Then copy/paste the following command in your terminal:

```
npm install -g div
```

Now you'll have the **div** command available on your machine, allowing you to run the following:

- **div new folder-name** - Create a new website with the welcome template
- **div dev** - Start up a dev environment for your website
- **div build** - Build a production ready version of your website (available in the `site` directory)

Next, head on over to [the official documentation](https://docs.div.so) to learn more about building your site.

## 🖐️ Five reasons this might just be your jam!

### 1. Page-based Routing

Each file within the `pages` directory corresponds to a route on your website. With a structure like this:

```
pages
├── index.html
├── about.html
├── contact
│   ├── index.html
│   ├── form
│   │   ├── index.html
```

Your new site will have the following routes available:

```
http://localhost:3000
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/contact/form
```

### 2. Layouts

Design **layouts** that multiple pages can utilize.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
</head>
<body>
    {slot}
</body>
</html>
```

Then, use it in any page.

```
<layout title="Radical Righteousness" src="main.html">

    <h1>🏄‍♂️ Totally Tubuloso Website</h1>
    
</layout>
```
### 3. Includes

Create re-usable HTML partials with the `<include>` tag. Specify the HTML file with the `src` attribute.

```
<layout title="Behind the Scenes!" src="main.html">

    <include src="about-header.html"></include>
    <include src="about-copy.html"></include>

</layout>
```

### 4. TailwindCSS Integration

Add the TailwindCSS **shortcode** to the `<head>` of any layout and it will automatically be injected. Example:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    {tailwindcss}
</head>
<body>
    {slot}
</body>
</html>
```

It will be replaced with the Tailwind CDN link in `dev`, and a minified CSS file will be compiled during `build`.

### 5. Collections

Add collections of data to your application. Here's an example collection located at **collections/menu.json**

```
[
    {
        "title" : "Home",
        "link" : "/"
    },
    {
        "title" : "About",
        "link" : "/about"
    }
]
```

Now, you can easily loop through this collection:

```
<ForEach collection="menu">
    <li>{menu.title}</h1>
</ForEach>
```

> Those are just a few of the hot features available, but there's [so much more to uncover and learn](https://static.devdojo.com/docs).

# Learn More

You can learn about all the features available by visiting the [official documentation](https://docs.div.so). You may also be interested in checking out some of the [templates here](https://div.so/templates).
