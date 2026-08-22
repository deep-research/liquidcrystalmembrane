# Liquid Crystal Membrane

# 1. Build and run the container locally
docker compose up --build

# 2. Stop the project
docker compose down

# 3. Deploy to GitHub Pages
docker compose run --rm app yarn deploy

# 4. Server will be at http://localhost:8080