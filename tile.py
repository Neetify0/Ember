import os

directories = [
    r'C:\Users\Namel\OneDrive\Documents\Ember\games',
    r'C:\Users\Namel\OneDrive\Documents\Ember\apps'
]

def get_game_folders(directory):
    game_folders = []
    for folder in os.listdir(directory):
        folder_path = os.path.join(directory, folder)
        if os.path.isdir(folder_path):
            game_folders.append(folder)
    return game_folders

def capitalize_title(title):
    return ' '.join([word.capitalize() for word in title.split('_')])

def remake_index_html(directory, game_folders):
    index_html_path = os.path.join(directory, 'index.html')
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ember</title>
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
     
    <script src="/cloak.js"></script> 

    
    <script src="/redirect.js"></script> 
    </head>
<body>

    <nav>
        <a href="/" class="logo">
            <img src="/images/ember.png" alt="Ember Logo" />
        </a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/apps/">Apps</a>
            <a href="/games/">Games</a>                 
            <a href="/settings/">Settings</a>
        </div>
    </nav>

    <div class="center_content">
        <h1>{directory.split(os.sep)[-1].capitalize()}</h1>
        <h2 id="random-text"></h2>
    </div>

    <div class="tile-grid">"""
    
    for game_folder in game_folders:
        game_name = capitalize_title(game_folder)
        image_path = f"/images/{game_folder}.png"
        html_content += f"""
        <div class="tile">
            <a href="/{directory.split(os.sep)[-1]}/{game_folder}/">
                <img src="{image_path}" alt="{game_name}">
                <div class="tile-title">{game_name}</div>
            </a>
        </div>"""
    
    html_content += """
    </div>

    <footer>
        <div class="footer-left">
            <a href="https://github.com/Neetify0/Ember"><img src="/images/github.png" alt="GitHub Repository"></a>
        </div>
        <div class="footer-right">
            <a href="/faq/">FAQ</a>
            <a href="/feedback/">Feedback</a>
            
            <a href="/dmca/">DMCA</a>       
            <a href="/credits/">Credits</a>
        </div>
    </footer>

    <script>
        const phrases = [
            "Blazing fast website!",
            '"Can you add Roblox?"',
            '"Ember, this website is the best!"',
            "Looking for apps and games?",
            "Free for everyone!",
            "lol",
            "The best apps and games on the web!"
        ];
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        document.getElementById("random-text").textContent = randomPhrase;
    </script>

        
    
    </body>
</html>"""
    
    with open(index_html_path, 'w', encoding='utf-8') as file:
        file.write(html_content)

for directory in directories:
    game_folders = get_game_folders(directory)
    remake_index_html(directory, game_folders)