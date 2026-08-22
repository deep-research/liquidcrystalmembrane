# Liquid Crystal Membrane

# 1. Build and run the container locally
docker compose up --build

# 2. Stop the project
docker compose down

# 3. Stop all running containers (works in both Git Bash and PowerShell)
docker stop (docker ps -q)

# 4. Deploy to GitHub Pages
docker compose run --rm app yarn deploy

# 5. Server will be at http://localhost:8080