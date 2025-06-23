class LikeButton extends HTMLElement {
	constructor() {
	  super();
	}

	connectedCallback() {
	  this.innerHTML = `
	<style>
		like-button {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: aquamarine;
			color: darkstalegrey;
			font-weight: bold;
			padding: 10px 15px;
			border: none;
			border-radius: 20px;
			transition: ease .5s;
			cursor: pointer;
		}
		like-button:hover {
			background-color: blue;
			color: white;
			font-weight: bolder;
			border-radius: 20px;
			transition: ease .5s;
		}
		#like-img123123000123{
			width: 24px;
			height; 24px;
			margin-right: 10px;
		}
	</style>
	<img id="like-img123123000123" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.yQTmnxPLNxZWSQzb-HEYSAHaHo%26pid%3DApi&f=1&ipt=ab8d828279f12bd32b10432a86a91098602bc395243d18a541230e63b03b69f2&ipo=images" alt="like"/>
	`;
	}
  }
  class subscribeButton extends HTMLElement {
	constructor() {
	  super();
	}

	connectedCallback() {
	  this.innerHTML = `
	<style>
	  subscribe-button {
		padding: 10px 15px;
		border-radius: 20px;
		background-color: red;
		color: white;
		font-weight: bolder;
		box-shadow: 6px 6px 10px black;
		transition: ease 0.5s;
	  }
	  subscribe-button:hover {
		transform: scale(1.2);
		box-shadow: 8px 8px 12px black;
  }
  subscribe-button:active {
	background-color: lightgrey;
	color: black;
	font-weight: 600;
	box-shadow: 6px 6px 10px black;
	transform: scale(0.9);
	transform: rotate(720deg);
	}
	</style>
	`;
	}
  }

  customElements.define("like-button", LikeButton);
  customElements.define("subscribe-button", subscribeButton);