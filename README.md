# 🐳 Docker + Angular 15 Boilerplate + Nginx + NodeJS (Sequelize) + PostgreSQL 14 🐳

![repo_logo](https://user-images.githubusercontent.com/57062736/175810561-b5128e39-a71e-49cc-984d-7a9f5e3841d4.png)

If you find this useful, remember about giving a start ⭐ to this repo or share it 🔁

## Description 📋

![docker_facebook_share](https://user-images.githubusercontent.com/57062736/139103227-36f3cb32-c3c1-4158-b99e-25a31e955f44.png)

This is a complete stack for running builded Angular App into Docker containers using docker compose tool, with a proxy Nginx between front and back (conected to the DB container with Sequelize ORM).

It is composed by 4 containers:

- `angularfrontend`, the one that runs the builded Angular APP in a container with Node and Nginx.
- `nodebackend`, a container with node runing and the ORM Sequelize conected to the "postgres" container.
- `middlenginx` that handles the request with a proxy configuration, linking front and back.
- `postgres` storing the PostgreSQL 14 databases.

## Installation ⌨

![Docker Installation Illustration](https://user-images.githubusercontent.com/57062736/139102730-d6f51d53-ffb3-44bb-be5e-2bdf48d91295.png)

0. You need **Docker** and **Docker Compose** where you are going to launch this so, if you do not have it... click [HERE](https://github.com/Inushin/dockerAngularNginxNodePostgreSQL#installing-docker-and-docker-compose-) or go to the end of this `.md` ^^

1. Clone this rep.

2. Edit the `docker-compose.yml` with your DB information. Notice that the configuration for the Postgres database, has information for another user and DB. In the `01-init.sh` file, that is in `db` dir, there is a configuration for adding the password `postgres` to the postgres user and creating a new DB, called `docker` with a new user with the same name and password. Change if you need to. Apart from this, modifies the `ph_hba.conf` adding `host all all 0.0.0.0/0 md5` so there is no problems with the conection of the database and the users.

3. Run `docker compose up` to check that everything runs correctly. If there it no errors, stop (`ctrl+C`) and delete containers with `docker compose down`. Now you can run it with `docker compose up -d`. This will run it in the background.

4. To check that eveything is running correctly in the background, run `docker compose ps -a` and you will see the running containers.

## Docker's useful commands 📑

![Docker Commands Illustration](https://user-images.githubusercontent.com/57062736/139102966-25f28be1-f768-49bd-a8a1-915a8465de9e.png)

- Run Docker Compose: `docker compose up -d` / `docker compose up`

- Check Docker Compose's volumens status: `docker compose ps -a` / `docker compose ps`

- Check Docker's images: `docker images -a`

- Remove Docker's images: `docker rmi -f imageID1 imageID2 ...` (-f = force)

- Enter to a Docker's volumen: `docker compose exec VolumenID sh` / `docker compose exec VolumenID bash`

- Copy a file to the docker we want to: `docker cp file docker_id:/dir`

- Remove all dangling (not tagged or associated with a container) containers, volumes, networks and images: `docker system prune`

- Remove all unused containers and images with at least one container associated to them: `docker system prune -a`

- Shows all unused local images: `docker images ls -f dangling=true`

- Shows all unused local volumes: `docker volume ls -f dangling=true`

- Remove all local volumes not used by at least one container: `docker volume prune`

## Installing Docker and Docker Compose 🛠

![Docker Composer](https://user-images.githubusercontent.com/57062736/141182130-b8ed2d7a-9a68-4387-b838-ba0d44bb4e0e.png)

**Adjust the installation to your OS. Here you have the one for Linux Mint (Ubuntu based)**

### Docker installation

1. Download and install Docker: `apt install docker`

2. Gives permisions so you can run it everywhere: `sudo usermod -aG docker $USER`

3. Starts Docker's service: `service docker start`

4. Starts Docker's service each time you run the SO: `chkconfig docker on`

### Docker Compose V2 installation

For this repo, DockerComposeV2 was used, so that is why we use `docker compose` instead of `docker-compose`. If you are using DockerComposeV1, have this in mind.

1. Run `sudo apt-get install docker-compose-plugin`

2. Check which versions are availables with `apt-cache madison docker-compose-plugin`

3. Intall the version you are looking for with `sudo apt-get install docker-compose-plugin=<VERSION_STRING>`, for this repo `sudo apt install docker-compose-plugin=2.6.0~ubuntu-focal` was used.

4. Check the version and the installation: `docker compose version`

## ⭐ Feedback and bugs 🐞

If you find any bug or just want to give your feedback (remember the ⭐ ^^), **Feel free to do it**. I am, as you, constantly learning and things change so quickly that... no one knows ^^

## Version control 📝

- [v1.0](https://github.com/Inushin/dockerAngularNginxNodePostgreSQL/tree/v1.0) - Repository created - 26/06/2022
- [v2.0](https://github.com/Inushin/dockerAngularNginxNodePostgreSQL/tree/v2.0) - Update to Angular 15 - 20/04/2023
- [v2.1 - Current](https://github.com/Inushin/dockerAngularNginxNodePostgreSQL/tree/v2.1) - Update Dockerfiles and Node to Node 18.16 (Alpine) - 13/05/2023
