### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm run dev
```
The server starts running on the port 5000

For production environment...

```sh
$ npm start
```

##### Mongodb Setup :

Create a database called 'xyz' and connect through the following url given below.

```sh
    mongodb://127.0.0.1/xyz
```

### API

##### Videos :

endpoint url to create video : http://localhost:5000/api/videos
make sure, In POST request header to put up 'Content-Type : application/json'

| Action | Endpoint URL |
| ------ | ------ |
| To create a video | http://localhost:5000/api/videos |
| To get video by its ID | http://localhost:5000/api/videos/ID |
| To delete Video by its ID | http://localhost:5000/api/videos/ID |
| To create a playlist | http://localhost:5000/api/playlist |
| To get playlist by its ID | http://localhost:5000/api/playlist/ID |
| To delete playlist by its ID | http://localhost:5000/api/playlist/ID |

To create video, the required parameters :
```sh
{
    title: 'Titanic', #required parameter, Unique
    video_url: 'titanic.mp4', #required parameter,  Unique
    thumbnail_url: 'https://example.com/static/thumb.jpeg', #required parameter,  Unique
    duration: 300 #required parameter
}
```

To create playlists, the required parameters :

```sh
{
    name: 'Titanic Playlist', #required parameter, Unique
    website_url: 'https://example.com/', #required parameter,  Unique
    videos: [1, 2, 3]
}
```

To add videos to the playlist pass an array of video id's.

*Happy coding!*