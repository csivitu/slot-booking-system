[![csivit][csivitu-shield]][csivitu-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/csivitu/slot-booking-app">
    <img src="https://csivit.com/images/favicon.png" alt="Logo" width="80">
  </a>

  <h3 align="center">YOUR_TITLE</h3>

  <p align="center">
    A system to manage slots for CCS and other CSI events.
    <br />
    <a href="https://github.com/csivitu/slot-booking-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/csivitu/slot-booking-app">View Demo</a>
    ·
    <a href="https://github.com/csivitu/slot-booking-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/csivitu/slot-booking-app/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors-)



<!-- ABOUT THE PROJECT -->
## About The Project

**slot-booking-app** is a smart solution to arrange discord meets for mass events like CCS. It automatically generate personalized discord invite links to achieve the same.


### Built With

* [Node](https://nodejs.org/en/)
* [Mongoose](https://www.npmjs.com/package/mongoose)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/csivitu/slot-booking-app.git
```
2. Install NPM packages
```sh
npm install
```

#### Using yarn

```sh
yarn install
```

**Note:**  If installing the packages with npm you get errors use yarn to install them.


<!-- USAGE EXAMPLES -->
## Usage

To run this project locally, you can run the following command. 

#### Using npm
```sh
npm start
```
#### Using yarn

```sh
yarn start
```

## API Endpoints

|Request Type| Route | Function |
|:-----------:|:------:|:---------:|
| POST | / | Book a slot and generate an invite link |
| GET | / | Get invite link and slot details of a registered user |
| GET | /slots | Get slot details |
| POST | /reset | Initialize or reset the slots |


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/csivitu/slot-booking-app/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

You are requested to follow the contribution guidelines specified in [CONTRIBUTING.md](./CONTRIBUTING.md) while contributing to the project :smile:.

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[csivitu-shield]: https://img.shields.io/badge/csivitu-csivitu-blue
[csivitu-url]: https://csivit.com
[issues-shield]: https://img.shields.io/github/issues/csivitu/slot-booking-app.svg?style=flat-square
[issues-url]: https://github.com/csivitu/slot-booking-app/issues
