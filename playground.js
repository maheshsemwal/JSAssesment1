// create a variable to hold your NFT's
let nftCollection = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT () {
    const newNFT = {
        Name: Name,
        description: description,
        edition: edition,
      };

    nftCollection.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (const nft of nftCollection) {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Edition: " + nft.edition);
        console.log("------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line
mintNFT("NFT1", "Description 1", 1);
mintNFT("NFT2", "Description 2", 2);
mintNFT("NFT3", "Description 3", 1);
listNFTs();
console.log("Total NFTs: " + getTotalSupply()); 
