# Liquid Crystal Membrane

# 1. Build the Docker image
docker build -t liquid-crystal-membrane .

# 2. Run the container
docker run -p 8080:8080 liquid-crystal-membrane

# 3. Stop all running containers (works in both Git Bash and PowerShell)
docker stop (docker ps -q)

# 4. Server will be at http://localhost:8080
