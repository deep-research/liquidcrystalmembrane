# Liquid Crystal Membrane

# 1. Build and run the container locally
docker compose up --build

# 2. Stop the project
docker compose down

# 3. Deploy to GitHub Pages
docker compose run --rm app sh -c "apk add --no-cache git openssh-client && cp -R /root/.ssh /tmp/ssh_keys && chmod 600 /tmp/ssh_keys/id_* /tmp/ssh_keys/config && git config --global user.name 'Victor Fisher' && git config --global user.email 'victor@victorsarchive.com' && yarn build && echo 'liquidcrystalmembrane.com' > dist/CNAME && GIT_SSH_COMMAND='ssh -F /tmp/ssh_keys/config -i /tmp/ssh_keys/id_ed25519_github -o IdentitiesOnly=yes' yarn gh-pages -d dist -f"

# 4. Server will be at http://localhost:8080