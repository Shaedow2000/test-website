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
            background-color: brown;
            color: brown;
            font-weight: bold;
            padding: 10px 15px;
            border: none;
            border-radius: 20px;
	    transition: ease 15s;
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
        `
    }
}


customElements.define('like-button', LikeButton);
