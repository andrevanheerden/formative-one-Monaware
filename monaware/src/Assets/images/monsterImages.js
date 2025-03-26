const monsterImages = {
  sample: [
    // Your existing image data remains exactly the same
    // I'm not repeating it here to save space, but keep all your current entries
    // Only adding one new example to show the format:
    {
      description: "example-monster",
      imageUrl: "https://example.com/path/to/image.jpg"
    },
    // ... all your other image entries
    {
      description: "aboleth",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg"
    },
    {
      description: "acolyte",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/7/77/Acolyte.jpg/revision/latest/top-crop/width/360/height/450?cb=20190202025341"
    },
    {
      description: "adult-black-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/13/1000/1000/636238871029832086.jpeg"
    },
    {
      description: "adult-blue-dragon",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/310cffff-e634-4de6-b97b-c007a2c2a5b8/d6j5028-7b9a8762-0881-432a-8e6c-98ccaaf895d8.jpg/v1/fill/w_1024,h_1279,q_75,strp/ancient_blue_dragon_by_benwootten_d6j5028-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OSIsInBhdGgiOiJcL2ZcLzMxMGNmZmZmLWU2MzQtNGRlNi1iOTdiLWMwMDdhMmMyYTViOFwvZDZqNTAyOC03YjlhODc2Mi0wODgxLTQzMmEtOGU2Yy05OGNjYWFmODk1ZDguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1mozgwR4fMK3z-SRyqKzoFvaOnY3I5x9Pw8M_ysnFz0"
    },
    {
      description: "adult-brass-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/133/1000/1000/636252756157427258.jpeg"
    },
    {
      description: "adult-bronze-dragon",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/b/b7/Monster_Manual_5e_-_Dragon%2C_Bronze_-_p107.jpg/revision/latest?cb=20200827225050"
    },
    {
      description: "adult-copper-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/22/1000/1000/636238956325913912.jpeg"
    },
    {
      description: "adult-gold-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/60/1000/1000/636252729283446963.jpeg"
    },
    {
      description: "adult-green-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg"
    },
    {
      description: "adult-red-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/399/1000/1000/636252784386259001.jpeg"
    },
    {
      description: "adult-silver-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/401/1000/1000/636252784740667730.jpeg"
    },
    {
      description: "adult-white-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/125/1000/1000/636252755468117001.jpeg"
    },
    {
      description: "air-elemental",
      imageUrl: "https://images.squarespace-cdn.com/content/58a9cf418419c2e78d7492e3/1588720626921-8DPPNS01ONPCIKN3OOBJ/636372274233290491.jpg?content-type=image%2Fjpeg"
    },
    {
      description: "ancient-black-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/129/1000/1000/636252755854649337.jpeg"
    },
    {
      description: "ancient-blue-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/16/1000/1000/636238882493439723.jpeg"
    },
    {
      description: "ancient-brass-dragon",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/310cffff-e634-4de6-b97b-c007a2c2a5b8/d1ylfox-9d0ca922-cde2-4b66-9bd9-7ef9c532492b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxMGNmZmZmLWU2MzQtNGRlNi1iOTdiLWMwMDdhMmMyYTViOFwvZDF5bGZveC05ZDBjYTkyMi1jZGUyLTRiNjYtOWJkOS03ZWY5YzUzMjQ5MmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BgkcQsu0pFPBZ0mCUeImQl0uu0T4PJsbMPrTAQ8P4_s"
    },
    {
      description: "ancient-bronze-dragon",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/310cffff-e634-4de6-b97b-c007a2c2a5b8/d1ylfs8-cf9a5893-6dc3-4f23-82d4-901f4d9302ed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zMTBjZmZmZi1lNjM0LTRkZTYtYjk3Yi1jMDA3YTJjMmE1YjgvZDF5bGZzOC1jZjlhNTg5My02ZGMzLTRmMjMtODJkNC05MDFmNGQ5MzAyZWQuanBnIn1dXX0.EvdAB5ED57x3V4NqqQ2ISeXsoBbneehNZFv2V57JiJE"
    },
    {
      description: "ancient-copper-dragon",
      imageUrl: "https://i.pinimg.com/originals/dd/17/d1/dd17d17e405c8f27321cc4cdda9a780b.png"
    },
    {
      description: "ancient-gold-dragon",
      imageUrl: "https://i.pinimg.com/originals/54/10/7f/54107fcb621195a06d873d6baf487bd2.jpg"
    },
    {
      description: "ancient-green-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/141/1000/1000/636252757319464533.jpeg"
    },
    {
      description: "ancient-red-dragon",
      imageUrl: "https://i.pinimg.com/originals/31/2e/fe/312efe9cb90e85659e6daa13a57b1421.png"
    },
    {
      description: "ancient-silver-dragon",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/310cffff-e634-4de6-b97b-c007a2c2a5b8/d9v4n0k-f9d6a0c9-2f1e-4377-9517-0d17cd4dba27.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxMGNmZmZmLWU2MzQtNGRlNi1iOTdiLWMwMDdhMmMyYTViOFwvZDl2NG4way1mOWQ2YTBjOS0yZjFlLTQzNzctOTUxNy0wZDE3Y2Q0ZGJhMjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.52kePw1OJWH90VC1GF97nGDBclvQWnjP-OSG3ujctjk"
    },
    {
      description: "ancient-white-dragon",
      imageUrl: "https://i.pinimg.com/originals/28/f0/3b/28f03b1373d27117204b05f8e5de5aa6.png"
    },
    {
      description: "androsphinx",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/157/1000/1000/636252759145617281.jpeg"
    },
    {
      description: "animated-armor",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/8/429/1000/1000/636306156895834255.jpeg"
    },
    {
      description: "ankheg",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/161/1000/1000/636252759871983921.jpeg"
    },
    {
      description: "ape",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/f/f2/Alumni_bar-lguraFC1.jpg/revision/latest?cb=20090827022240"
    },
    {
      description: "archmage",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/167/1000/1000/636252760213195530.jpeg"
    },
    {
      description: "assassin",
      imageUrl: "https://i.pinimg.com/originals/19/6e/ed/196eeda5c3fe30e131cc7e3e5f8771c0.png"
    },
    {
      description: "awakened-shrub",
      imageUrl: "https://i.redd.it/k5tpifk8ht531.jpg"
    },
    {
      description: "awakened-tree",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/97/1000/1000/636252740537990664.jpeg"
    },
    {
      description: "axe-beak",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/5/5b/Axe_beak-5e.jpg/revision/latest?cb=20200917222507"
    },
    {
      description: "azer",
      imageUrl: "https://www.tribality.com/wp-content/uploads/2016/08/azer1.png"
    },
    {
      description: "baboon",
      imageUrl: "https://64.media.tumblr.com/7b5da794d1a7471e765ddbda4515ade3/d2b0b055c02356ac-26/s400x600/428ac896995b863655306a6f7a74890cbb5c8eb0.jpg"
    },
    {
      description: "badger",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/530/1000/1000/636376327839601860.jpeg"
    },
    {
      description: "balor",
      imageUrl: "https://static.wikia.nocookie.net/vsdebating/images/2/28/Balor-0.jpg/revision/latest?cb=20180206062016"
    },
    {
      description: "bandit",
      imageUrl: "https://i.pinimg.com/originals/5e/08/00/5e0800305b180faeaf8e58ca352ffee1.png"
    },
    {
      description: "bandit-captain",
      imageUrl: "https://www.aidedd.org/dnd/images/bandit-captain.jpg"
    },
    {
      description: "barbed-devil",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/486/1000/1000/636376302569423870.jpeg"
    },
    {
      description: "basilisk",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/185/1000/1000/636252762168821795.jpeg"
    },
    {
      description: "bat",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/906/1000/1000/636334289313689439.jpeg"
    },
    {
      description: "bearded-devil",
      imageUrl: "https://i.pinimg.com/originals/3b/a1/ab/3ba1ab8e94d89cf07b9c6a8c19a01300.jpg"
    },
    {
      description: "behir",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/195/1000/1000/636252763748680024.jpeg"
    },
    {
      description: "berserker",
      imageUrl: "https://64.media.tumblr.com/8c391d5a974d6bdba12b301a5a377868/tumblr_inline_ou267iPZFM1uudcoe_1280.jpg"
    },
    {
      description: "black-bear",
      imageUrl: "https://static.wikia.nocookie.net/dungeonsdragons/images/f/f4/Fig_P1.11_Black_Bear.jpg/revision/latest?cb=20110502052108"
    },
    {
      description: "black-dragon-wyrmling",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/496/1000/1000/636376308217017511.jpeg"
    },
    {
      description: "black-pudding",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/201/1000/1000/636252764027417823.jpeg"
    },
    {
      description: "blink-dog",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/205/1000/1000/636252764168652859.jpeg"
    },
    {
      description: "blood-hawk",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/d/df/Hawk_5e.jpg/revision/latest?cb=20210408132609"
    },
    {
      description: "blue-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/originals/ef/04/98/ef049872aca912874ffbd9567e355b8b.jpg"
    },
    {
      description: "boar",
      imageUrl: "https://media.comicbook.com/2019/08/boar-1181937-1280x0.jpeg"
    },
    {
      description: "bone-devil",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/481/1000/1000/636328225187253200.jpeg"
    },
    {
      description: "brass-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/originals/d5/47/9f/d5479fd8be356a048b2988098758547f.jpg"
    },
    {
      description: "bronze-dragon-wyrmling",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/492/1000/1000/636376306909593829.jpeg"
    },
    {
      description: "brown-bear",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/f/fb/Brown_bear_2e.png/revision/latest?cb=20210131175613"
    },
    {
      description: "bugbear",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/221/1000/1000/636252765234633232.jpeg"
    },
    {
      description: "bulette",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/9/9c/Bulette_-_Todd_Lockwood.jpg/revision/latest?cb=20090519092059"
    },
    {
      description: "camel",
      imageUrl: "https://thegraphicsfairy.com/wp-content/uploads/2020/09/Vintage-Camel-Picture-GraphicsFairy.jpg"
    },
    {
      description: "cat",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/3/32/Cat1.png/revision/latest?cb=20190814175842"
    },
    {
      description: "centaur",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/227/1000/1000/636252765573266420.jpeg"
    },
    {
      description: "chain-devil",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/235/1000/1000/636252766618069332.jpeg"
    },
    {
      description: "chimera",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/237/1000/1000/636252766770156389.jpeg"
    },
    {
      description: "chuul",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/6/6c/ImagesCAE6JA9W.jpg/revision/latest?cb=20131011185620"
    },
    {
      description: "clay-golem",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/243/1000/1000/636252767318152303.jpeg"
    },
    {
      description: "cloaker",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/245/1000/1000/636252767458838228.jpeg"
    },
    {
      description: "cloud-giant",
      imageUrl: "https://angrygolem-games.com/wp-content/uploads/2021/03/cloud-giant.jpg"
    },
    {
      description: "cockatrice",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/251/1000/1000/636252767744669874.jpeg"
    },
    {
      description: "commoner",
      imageUrl: "https://i.pinimg.com/originals/e7/cd/a0/e7cda09a2c0a98da61272780391efcdf.png"
    },
    {
      description: "constrictor-snake",
      imageUrl: "https://www.epicpath.org/images/thumb/c/c2/Giant_Constrictor_Snake_1.jpg/600px-Giant_Constrictor_Snake_1.jpg"
    },
    {
      description: "copper-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/originals/49/9a/1a/499a1a567019d5c492c86a67ed09a534.jpg"
    },
    {
      description: "couatl",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/257/1000/1000/636252768143323827.jpeg"
    },
    {
      description: "crab",
      imageUrl: "https://koboldpress.com/wp-content/uploads/2019/07/garrotter-crab.jpg"
    },
    {
      description: "crocodile",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/2/27/Crocodile.jpeg/revision/latest?cb=20190624075223"
    },
    {
      description: "cult-fanatic",
      imageUrl: "https://www.aidedd.org/dnd/images/cult-fanatic.jpg"
    },
    {
      description: "cultist",
      imageUrl: "https://www.kindpng.com/picc/m/220-2201892_transparent-dungeons-and-dragons-png-dragon-claw-dnd.png"
    },
    {
      description: "darkmantle",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/263/1000/1000/636252768676699519.jpeg"
    },
    {
      description: "death-dog",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/265/1000/1000/636252768823194310.jpeg"
    },
    {
      description: "deep-gnome-svirfneblin",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/112/1000/1000/636323610009818415.jpeg"
    },
    {
      description: "deer",
      imageUrl: "https://i.pinimg.com/originals/a0/42/71/a04271ed4b0cfd8a849111b29e53fb57.jpg"
    },
    {
      description: "deva",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/267/1000/1000/636252768980059444.jpeg"
    },
    {
      description: "dire-wolf",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg"
    },
    {
      description: "djinni",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/281/1000/1000/636252770322204007.jpeg"
    },
    {
      description: "doppelganger",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/289/1000/1000/636252770983164351.jpeg"
    },
    {
      description: "draft-horse",
      imageUrl: "http://dungeon.su/gallery/bestiary/412_1_1587215928.jpg"
    },
    {
      description: "dragon-turtle",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/291/1000/1000/636252771128151641.jpeg"
    },
    {
      description: "dretch",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/293/271/315/636252771253285096.jpeg"
    },
    {
      description: "drider",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/295/1000/1000/636252771409285458.jpeg"
    },
    {
      description: "drow",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/1/13/Drow_3e.jpg/revision/latest?cb=20190809133546"
    },
    {
      description: "druid",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/299/1000/1000/636252771583275655.jpeg"
    },
    {
      description: "dryad",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/307/1000/1000/636252771953950206.jpeg"
    },
    {
      description: "duergar",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/309/1000/1000/636252772101183765.jpeg"
    },
    {
      description: "dust-mephit",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/313/1000/1000/636252772213922157.jpeg"
    },
    {
      description: "eagle",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/515/1000/1000/636376317171111968.jpeg"
    },
    {
      description: "earth-elemental",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/317/1000/1000/636252772331779404.jpeg"
    },
    {
      description: "efreeti",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/0/03/Efreeti-5e.png/revision/latest?cb=20171011020359"
    },
    {
      description: "elephant",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/4/43/Elephant.gif/revision/latest?cb=20190730150236"
    },
    {
      description: "elk",
      imageUrl: "https://i.pinimg.com/originals/9d/ee/05/9dee058fe57c29f9dd73002885eabd01.jpg"
    },
    {
      description: "erinyes",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/329/1000/1000/636252776041158657.jpeg"
    },
    {
      description: "ettercap",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/339/1000/1000/636252776771842998.jpeg"
    },
    {
      description: "ettin",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/341/1000/1000/636252776953634777.jpeg"
    },
    {
      description: "fire-elemental",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/343/1000/1000/636252777098624896.jpeg"
    },
    {
      description: "fire-giant",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/c/c2/FireGiant-5e.jpg/revision/latest?cb=20141112154314"
    },
    {
      description: "flesh-golem",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/359/1000/1000/636252778311644574.jpeg"
    },
    {
      description: "flying-snake",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/517/1000/1000/636376319640572721.jpeg"
    },
    {
      description: "flying-sword",
      imageUrl: "https://www.aidedd.org/dnd/images/flying-sword.jpg"
    },
    {
      description: "frog",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/523/1000/1000/636376321230650501.jpeg"
    },
    {
      description: "frost-giant",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/405/1000/1000/636252786158646348.jpeg"
    },
    {
      description: "gargoyle",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/407/1000/1000/636252786295384889.jpeg"
    },
    {
      description: "gelatinous-cube",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/409/1000/1000/636252786406028958.jpeg"
    },
    {
      description: "ghast",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/411/286/315/636252786516023032.jpeg"
    },
    {
      description: "ghost",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/413/1000/1000/636252786639798307.jpeg"
    },
    {
      description: "ghoul",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/6/62/Ghoul_-_David_Griffith.jpg/revision/latest?cb=20200311071955"
    },
    {
      description: "giant-ape",
      imageUrl: "https://www.jing.fm/clipimg/detail/45-453539_giant-ape-dnd-5e.png"
    },
    {
      description: "giant-badger",
      imageUrl: "https://db4sgowjqfwig.cloudfront.net/campaigns/110358/assets/474975/Giant_Badger.jpg?1435302200"
    },
    {
      description: "giant-bat",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/7/73/Dire_bats.png/revision/latest?cb=20160724004340"
    },
    {
      description: "giant-boar",
      imageUrl: "https://i.pinimg.com/736x/34/72/33/3472332b715693d4471c7efdc89106a9.jpg"
    },
    {
      description: "giant-snake",
      imageUrl: "https://i.pinimg.com/originals/7a/26/18/7a261896b68df3105f21537100bb988a.png"
    },
    {
      description: "giant-crab",
      imageUrl: "https://www.kindpng.com/picc/m/402-4021012_hermitcrab-giant-hermit-crab-dnd-hd-png-download.png"
    },
    {
      description: "giant-crocodile",
      imageUrl: "https://i.pinimg.com/originals/d0/c8/cf/d0c8cf7dfc7a428d66aa701bfa7d1b21.jpg"
    },
    {
      description: "giant-eagle",
      imageUrl: "https://www.kindpng.com/picc/m/650-6502753_eagle-giant-05-dnd-5e-giant-eagle-hd.png"
    },
    {
      description: "giant-elk",
      imageUrl: "https://img.freepik.com/free-vector/red-deer-from-splash-watercolor-colored-drawing-realistic-vector-illustration-paints_291138-496.jpg?size=338&ext=jpg"
    },
    {
      description: "giant-fire-beetle",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg"
    },
    {
      description: "giant-frog",
      imageUrl: "https://static.wikia.nocookie.net/rythiae/images/3/35/Giant_Frog_1.jpg/revision/latest?cb=20141125110711"
    },
    {
      description: "giant-goat",
      imageUrl: "https://static.wikia.nocookie.net/eberron/images/0/07/83042.jpg/revision/latest/top-crop/width/360/height/360?cb=20110927024846"
    },
    {
      description: "giant-hyena",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/8/8d/Hyena_4e.jpg/revision/latest?cb=20200311072705"
    },
    {
      description: "giant-lizard",
      imageUrl: "https://i.pinimg.com/originals/a3/e8/12/a3e812f75810022f6bb9ac42c73e97b7.png"
    },
    {
      description: "giant-octopus",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/898/1000/1000/636334288003435302.jpeg"
    },
    {
      description: "giant-owl",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/535/1000/1000/636376331788287090.jpeg"
    },
    {
      description: "giant-poisonous-snake",
      imageUrl: "https://lh3.googleusercontent.com/proxy/6isFSVD-VL60Of80rCWTWsWzSmCzGPOWDAggIu-JGVRi5qzZDOydTtEFpsQ3UBILWEoFtQ_d-sbxu6k0QOFh7ugtub2FO_ZT0fWc6C_qTRyrqw9l5CbXHcvLY3X_yb6Xi_H5b3I1_xsWi5TbaX3axIimPn7gaM97d1DVvK6hIg0PnIGp7lXaFeokWLBLLLdqPYCTXCM"
    },
    {
      description: "giant-rat",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/538/1000/1000/636376332197953299.jpeg"
    },
    {
      description: "giant-rat-diseased",
      imageUrl: "https://i.pinimg.com/originals/ef/de/42/efde42af0e6ec701dcc2fe5c9aeca4b3.png"
    },
    {
      description: "giant-scorpion",
      imageUrl: "https://angrygolem-games.com/wp-content/uploads/2020/08/giant-scorpion.jpg"
    },
    {
      description: "giant-sea-horse",
      imageUrl: "http://dungeon.su/gallery/bestiary/354_1_1587216186.jpg"
    },
    {
      description: "giant-shark",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/2/24/Shark_4e.jpg/revision/latest?cb=20190816043047"
    },
    {
      description: "giant-spider",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/323/1000/1000/636252775648743317.jpeg"
    },
    {
      description: "giant-toad",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/8/8a/Gfrog2e.png/revision/latest?cb=20191028135147"
    },
    {
      description: "giant-vulture",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/c/c4/Giantvulture.jpg/revision/latest?cb=20200220162139"
    },
    {
      description: "giant-wasp",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/f/f1/Giant_wasp_2e.jpg/revision/latest?cb=20210131092306"
    },
    {
      description: "giant-weasel",
      imageUrl: "https://db4sgowjqfwig.cloudfront.net/campaigns/69163/assets/304622/giant-weasel-brynnmetheney.jpg?1398108252"
    },
    {
      description: "giant-wolf",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/54/1000/1000/636252725270715296.jpeg"
    },
    {
      description: "giant-wolf-spider",
      imageUrl: "https://www.pngitem.com/pimgs/m/329-3298552_giant-spider-dnd-5e-hd-png-download.png"
    },
    {
      description: "gibbering-mouther",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/333/1000/1000/636252776252001529.jpeg"
    },
    {
      description: "glabrezu",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/337/1000/1000/636252776677682465.jpeg"
    },
    {
      description: "gladiator",
      imageUrl: "https://i.pinimg.com/originals/48/a0/a2/48a0a2304e43b39426a3637cb640174a.png"
    },
    {
      description: "gnoll",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/345/1000/1000/636252777224997611.jpeg"
    },
    {
      description: "goat",
      imageUrl: "https://static.wikia.nocookie.net/dungeonsdragons/images/d/da/Goat.jpg/revision/latest?cb=20121204224905"
    },
    {
      description: "goblin",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/351/1000/1000/636252777818652432.jpeg"
    },
    {
      description: "gold-dragon-wyrmling",
      imageUrl: "https://png.pngitem.com/pimgs/s/521-5215164_gold-dragon-wyrmling-hd-png-download.png"
    },
    {
      description: "gorgon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/355/1000/1000/636252778125099430.jpeg "
    },
    {
      description: "gray-ooze",
      imageUrl: "https://64.media.tumblr.com/2138df19002f15a2b13469980c6880d2/tumblr_prj8kcpqmg1yoi9uyo1_400.jpg"
    },
    {
      description: "green-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/736x/b2/37/0d/b2370d5e2f5a1ef6c4faa1e16ffa3519.jpg"
    },
    {
      description: "green-hag",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/365/1000/1000/636252778948574879.jpeg"
    },
    {
      description: "grick",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/369/1000/1000/636252779341924439.jpeg"
    },
    {
      description: "griffon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/373/1000/1000/636252779693862725.jpeg"
    },
    {
      description: "grimlock",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/375/1000/1000/636252780049813181.jpeg"
    },
    {
      description: "guard",
      imageUrl: "https://www.dmsguild.com/images/8957/193701.jpg"
    },
    {
      description: "guardian-naga",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/377/1000/1000/636252780447421771.jpeg"
    },
    {
      description: "gynosphinx",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/383/1000/1000/636252780786457550.jpeg"
    },
    {
      description: "half-red-dragon-veteran",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/387/288/315/636252781353903793.jpeg"
    },
    {
      description: "harpy",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/391/1000/1000/636252781955908234.jpeg"
    },
    {
      description: "hawk",
      imageUrl: "https://i.pinimg.com/originals/bb/ae/c2/bbaec2cfce16a72c4e4673f26ecf3af1.jpg"
    },
    {
      description: "hell-hound",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/393/336/315/636252782461361426.jpeg"
    },
    {
      description: "hezrou",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/321/1000/1000/636252775562934524.jpeg"
    },
    {
      description: "hill-giant",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/331/1000/1000/636252776196140305.jpeg"
    },
    {
      description: "hippogriff",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/335/1000/1000/636252776578605778.jpeg"
    },
    {
      description: "hobgoblin",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/389/1000/1000/636252781431932597.jpeg"
    },
    {
      description: "homunculus",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/18/287/1000/1000/636379803928245506.jpeg"
    },
    {
      description: "horned-devil",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/347/1000/1000/636252777255936976.jpeg"
    },
    {
      description: "hunter-shark",
      imageUrl: "https://www.tribality.com/wp-content/uploads/2015/04/Mermaid.jpg"
    },
    {
      description: "hydra",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/a/a3/Hydra-5e.png/revision/latest?cb=20171011014237"
    },
    {
      description: "hyena",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/902/1000/1000/636334288674955736.jpeg"
    },
    {
      description: "ice-devil",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/353/1000/1000/636252777966974765.jpeg"
    },
    {
      description: "ice-mephit",
      imageUrl: "https://www.aidedd.org/dnd/images/ice-mephit.jpg"
    },
    {
      description: "imp",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/361/1000/1000/636252778560366227.jpeg"
    },
    {
      description: "invisible-stalker",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/367/1000/1000/636252779159282339.jpeg"
    },
    {
      description: "iron-golem",
      imageUrl: ""
    },
    {
      description: "jackal",
      imageUrl: "https://srd.dndtools.org/srd/resource/images/sand/87616.jpg"
    },
    {
      description: "killer-whale",
      imageUrl: "https://render.fineartamerica.com/images/rendered/search/print/8/6/break/images/artworkimages/medium/1/orca-amy-hamilton.jpg"
    },
    {
      description: "knight",
      imageUrl: "https://s-media-cache-ak0.pinimg.com/236x/c5/9c/25/c59c25e66d3a4b6ba706c55856cfded7.jpg"
    },
    {
      description: "kobold",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg"
    },
    {
      description: "kraken",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/381/1000/1000/636252780680163799.jpeg"
    },
    {
      description: "lamia",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/385/1000/1000/636252780906064244.jpeg"
    },
    {
      description: "lemure",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/a/a4/Lemure-5e.jpg/revision/latest?cb=20161013135326"
    },
    {
      description: "lich",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/165/1000/1000/636252760084366499.jpeg"
    },
    {
      description: "lion",
      imageUrl: "https://i.pinimg.com/originals/c6/98/ee/c698eeeed61c5142f543490228354bbe.png"
    },
    {
      description: "lizard",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7aa9d383-2837-41aa-b7b7-8f831c00ddef/de1gkm0-bd4fe3ca-4396-46d2-a034-a6985a22a229.jpg/v1/fill/w_900,h_1165,q_75,strp/pathfinder__giant_frilled_lizard_by_willobrien_de1gkm0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2NSIsInBhdGgiOiJcL2ZcLzdhYTlkMzgzLTI4MzctNDFhYS1iN2I3LThmODMxYzAwZGRlZlwvZGUxZ2ttMC1iZDRmZTNjYS00Mzk2LTQ2ZDItYTAzNC1hNjk4NWEyMmEyMjkuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HwhrUl3Akli6EQtO-_yGcnaGU2XATVpVUHz5jMd3C00"
    },
    {
      description: "lizardfolk",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/233/1000/1000/636252766314905259.jpeg"
    },
    {
      description: "mage",
      imageUrl: "https://i.redd.it/rvggmiikf6041.jpg"
    },
    {
      description: "magma-mephit",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/18/292/147/315/636379804350894228.jpeg"
    },
    {
      description: "magmin",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/2/28/Magmin.jpeg/revision/latest?cb=20181207123317"
    },
    {
      description: "mammoth",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/3/35/Woolly_Mammoth.jpg/revision/latest?cb=20180825163944"
    },
    {
      description: "manticore",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/187/1000/1000/636252762623266809.jpeg"
    },
    {
      description: "marilith",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/e/ef/Marilith-5e.jpg/revision/latest?cb=20161120182923"
    },
    {
      description: "mastiff",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/191/1000/1000/636252763295291063.jpeg"
    },
    {
      description: "medusa",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/580/1000/1000/636376361850900325.jpeg"
    },
    {
      description: "merfolk",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/197/1000/1000/636252763841141413.jpeg"
    },
    {
      description: "merrow",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/203/1000/1000/636252764097970952.jpeg"
    },
    {
      description: "mimic",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/211/1000/1000/636252764731637373.jpeg"
    },
    {
      description: "minotaur",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/217/1000/1000/636252765009181721.jpeg"
    },
    {
      description: "minotaur-skeleton",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/480/1000/1000/636376298435934058.jpeg"
    },
    {
      description: "mule",
      imageUrl: "https://i.pinimg.com/originals/b7/70/54/b77054cb64f250dd9345c39c97934602.jpg"
    },
    {
      description: "mummy",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/225/1000/1000/636252765553048566.jpeg"
    },
    {
      description: "mummy-lord",
      imageUrl: "https://i.pinimg.com/originals/0c/79/84/0c7984b7ee4e53c94e5be149368e98b6.png"
    },
    {
      description: "nalfeshnee",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/261/1000/1000/636252768396688147.jpeg"
    },
    {
      description: "night-hag",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/4/40/Night_Hag-5e.png/revision/latest?cb=20171011031553"
    },
    {
      description: "nightmare",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/273/1000/1000/636252769493472144.jpeg"
    },
    {
      description: "noble",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/277/1000/1000/636252769861281900.jpeg"
    },
    {
      description: "ochre-jelly",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/279/1000/1000/636252770058723674.jpeg"
    },
    {
      description: "octopus",
      imageUrl: "https://i.pinimg.com/originals/fe/52/5b/fe525b2af90bbb18a2d106e4ffab85fb.jpg"
    },
    {
      description: "ogre",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/285/1000/1000/636252770535203221.jpeg"
    },
    {
      description: "ogre-zombie",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/287/1000/1000/636252770700032248.jpeg"
    },
    {
      description: "oni",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/297/1000/1000/636252771507213738.jpeg"
    },
    {
      description: "orc",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg"
    },
    {
      description: "otyugh",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/305/1000/1000/636252771931366466.jpeg"
    },
    {
      description: "owl",
      imageUrl: "https://static.wikia.nocookie.net/dungeonsdragons/images/b/b3/Giantowl.jpg/revision/latest?cb=20120410042459"
    },
    {
      description: "owlbear",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/315/256/315/636252772225295187.jpeg"
    },
    {
      description: "panther",
      imageUrl: "http://dungeon.su/gallery/bestiary/391_1_1587215714.jpg"
    },
    {
      description: "pegasus",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/e/e7/Pegasus.JPG/revision/latest?cb=20070316184235"
    },
    {
      description: "phase-spider",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/319/400/315/636252772538300448.jpeg"
    },
    {
      description: "pit-fiend",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/311/1000/1000/636252772132434763.jpeg"
    },
    {
      description: "planetar",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/303/1000/1000/636252771762002496.jpeg"
    },
    {
      description: "plesiosaurus",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/488/1000/1000/636376304583147024.jpeg"
    },
    {
      description: "poisonous-snake",
      imageUrl: "https://i.pinimg.com/originals/24/ca/d6/24cad6a32636978010b2f446e05e58ff.jpg"
    },
    {
      description: "polar-bear",
      imageUrl: "https://static.wikia.nocookie.net/dungeonsdragons/images/f/f2/83544.jpg/revision/latest?cb=20121017025053"
    },
    {
      description: "pony",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/904/1000/1000/636334288913250513.jpeg"
    },
    {
      description: "priest",
      imageUrl: "https://i.pinimg.com/originals/29/af/37/29af374e6f9f23cf56653e1914367ff0.jpg"
    },
    {
      description: "pseudodragon",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/d/d6/Pseudodragon-5e.png/revision/latest?cb=20180627022549"
    },
    {
      description: "purple-worm",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/275/1000/1000/636252769846436684.jpeg"
    },
    {
      description: "quasit",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/271/226/315/636252769318699115.jpeg"
    },
    {
      description: "quipper",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/253/1000/1000/636252767919065233.jpeg"
    },
    {
      description: "rakshasa",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/247/1000/1000/636252767480157951.jpeg"
    },
    {
      description: "rat",
      imageUrl: "https://i.pinimg.com/originals/0b/7b/ed/0b7bedcb3236805cbe5a6d7274516fb0.png"
    },
    {
      description: "raven",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/553/1000/1000/636376341568391037.jpeg"
    },
    {
      description: "red-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/originals/d8/3b/c4/d83bc4b94a6ee53361e70230788e6145.jpg"
    },
    {
      description: "reef-shark",
      imageUrl: "https://www.pngitem.com/pimgs/m/514-5147665_tiger-shark-png-download-reef-shark-dnd-5e.png"
    },
    {
      description: "remorhaz",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/231/1000/1000/636252766143328421.jpeg"
    },
    {
      description: "rhinoceros",
      imageUrl: "https://static.wikia.nocookie.net/dungeonsdragons/images/c/c6/Dire_Rhinoceros.jpg/revision/latest?cb=20110502061858"
    },
    {
      description: "riding-horse",
      imageUrl: "http://dungeon.su/gallery/bestiary/412_1_1587215928.jpg"
    },
    {
      description: "roc",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/229/1000/1000/636252765590929622.jpeg"
    },
    {
      description: "roper",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/560/1000/1000/636376344528091115.jpeg"
    },
    {
      description: "rug-of-smothering",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/213/1000/1000/636252764761726261.jpeg"
    },
    {
      description: "rust-monster",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/207/1000/1000/636252764265020108.jpeg"
    },
    {
      description: "saber-toothed-tiger",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/e/e2/Saber-toothed_tiger-3e.jpg/revision/latest?cb=20200908031311"
    },
    {
      description: "sahuagin",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/177/1000/1000/636252761683746719.jpeg"
    },
    {
      description: "salamander",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/173/1000/1000/636252761197608364.jpeg"
    },
    {
      description: "satyr",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/169/1000/1000/636252760706340605.jpeg"
    },
    {
      description: "scorpion",
      imageUrl: "https://static.wikia.nocookie.net/rollplaydnd/images/4/4c/Pzo1127_scorpion_by_critical_dean-d6t11mh.jpg/revision/latest?cb=20150515122955"
    },
    {
      description: "scout",
      imageUrl: "https://www.aidedd.org/dnd/images/scout.jpg"
    },
    {
      description: "sea-hag",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/159/1000/1000/636252759356069260.jpeg"
    },
    {
      description: "sea-horse",
      imageUrl: "https://cdn.shopify.com/s/files/1/0677/6533/files/1a_59ed40a4-4036-45ae-bc6d-9fce2a3a9840_grande.jpg?v=1571069544"
    },
    {
      description: "shadow",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/155/1000/1000/636252758977032019.jpeg"
    },
    {
      description: "shambling-mound",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/563/1000/1000/636376346968079714.jpeg"
    },
    {
      description: "shield-guardian",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/f/f9/Shield_Guardian-5e.png/revision/latest?cb=20171011015212"
    },
    {
      description: "shrieker",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/571/1000/1000/636376357634308010.jpeg"
    },
    {
      description: "silver-dragon-wyrmling",
      imageUrl: "https://i.pinimg.com/originals/22/06/28/2206288cd1d3fa778540fe21ddde2acf.jpg"
    },
    {
      description: "skeleton",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/472/1000/1000/636376294573239565.jpeg"
    },
    {
      description: "solar",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/121/1000/1000/636252748079664097.jpeg"
    },
    {
      description: "specter",
      imageUrl: "https://angrygolem-games.com/wp-content/uploads/2020/09/specter.jpg"
    },
    {
      description: "spider",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/575/1000/1000/636376359864842950.jpeg"
    },
    {
      description: "spirit-naga",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/117/1000/1000/636252746851035686.jpeg"
    },
    {
      description: "sprite",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/115/1000/1000/636252746444973630.jpeg"
    },
    {
      description: "spy",
      imageUrl: "https://i.pinimg.com/originals/3b/df/a0/3bdfa0a38f47b21496eafd36eb01a5e3.png"
    },
    {
      description: "steam-mephit",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/113/1000/1000/636252745841820724.jpeg"
    },
    {
      description: "stirge",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/111/1000/1000/636252745395103202.jpeg"
    },
    {
      description: "stone-giant",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/109/1000/1000/636252744518731463.jpeg"
    },
    {
      description: "stone-golem",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/107/1000/1000/636252743780112834.jpeg"
    },
    {
      description: "storm-giant",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/105/1000/1000/636252743254029469.jpeg"
    },
    {
      description: "succubus-incubus",
      imageUrl: "https://www.aidedd.org/dnd/images/succubus.jpg"
    },
    {
      description: "swarm-of-bats",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/9/906/1000/1000/636334289313689439.jpeg"
    },
    {
      description: "swarm-of-beetles",
      imageUrl: "https://static.wikia.nocookie.net/dungeons/images/2/2e/GemScarab.jpg/revision/latest/scale-to-width-down/400?cb=20090915191942"
    },
    {
      description: "swarm-of-centipedes",
      imageUrl: "https://i.pinimg.com/originals/72/3d/5b/723d5b0412be5c7776bc4c6f3d2d89c5.jpg"
    },
    {
      description: "swarm-of-insects",
      imageUrl: "https://www.kindpng.com/picc/m/661-6614450_insect-swarm-dnd-5e-hd-png-download.png"
    },
    {
      description: "swarm-of-poisonous-snakes",
      imageUrl: "https://i.pinimg.com/736x/20/ee/3f/20ee3f8906b0d102774e98e7ee7eaef8.jpg"
    },
    {
      description: "swarm-of-quippers",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5bb69998a5682702669d3565/1538802957326-FXULK3HZMH6BXS5LFQ0L/Fish+Swarm+konami+commercia.jpg?format=2500w"
    },
    {
      description: "swarm-of-rats",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/0/07/Cranium_rats-5e.jpg/revision/latest?cb=20171010163052"
    },
    {
      description: "swarm-of-ravens",
      imageUrl: "https://i.pinimg.com/474x/e1/11/ec/e111ecdf4411b042f80f9ef68837c357.jpg"
    },
    {
      description: "swarm-of-spiders",
      imageUrl: "https://i.pinimg.com/originals/6a/97/14/6a97141471b93d1d24ec86ca8b91984c.png"
    },
    {
      description: "swarm-of-wasps",
      imageUrl: "https://i.pinimg.com/originals/e6/76/ec/e676ec1b67a58f533841f514bdb27d1e.png"
    },
    {
      description: "tarrasque",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/101/1000/1000/636252741877524077.jpeg"
    },
    {
      description: "thug",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/99/1000/1000/636252741335519081.jpeg"
    },
    {
      description: "tiger",
      imageUrl: "https://i.pinimg.com/originals/12/79/a0/1279a0223d787f1b57690fc94b5b1a4c.png"
    },
    {
      description: "treant",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/3/31/Treant.png/revision/latest?cb=20190814103426"
    },
    {
      description: "tribal-warrior",
      imageUrl: "https://www.kindpng.com/picc/m/366-3666386_pin-by-sharma-koko-on-zulu-warriors-tribal.png"
    },
    {
      description: "triceratops",
      imageUrl: "https://www.aidedd.org/dnd/images/triceratops.jpg"
    },
    {
      description: "troll",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/95/1000/1000/636252739682234623.jpeg"
    },
    {
      description: "tyrannosaurus-rex",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/594/1000/1000/636376369004412963.jpeg"
    },
    {
      description: "unicorn",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/93/1000/1000/636252739248798123.jpeg"
    },
    {
      description: "vampire",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/91/1000/1000/636252738665379794.jpeg"
    },
    {
      description: "vampire-spawn",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/a/ab/Vampire_Spawn-5e.png/revision/latest?cb=20171010185457"
    },
    {
      description: "veteran",
      imageUrl: "https://i.pinimg.com/originals/a4/ea/a2/a4eaa215da286409bd37b3faeacd516e.png"
    },
    {
      description: "violet-fungus",
      imageUrl: "https://www.aidedd.org/dnd/images/violet-fungus.jpg"
    },
    {
      description: "vrock",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/87/1000/1000/636252737538172594.jpeg"
    },
    {
      description: "vulture",
      imageUrl: "https://i.pinimg.com/originals/f3/6f/e5/f36fe52b59a87eca69d6335d20e711c8.jpg"
    },
    {
      description: "warhorse",
      imageUrl: "https://i.pinimg.com/originals/11/7a/4f/117a4f434ea9d89a115570fe3ca515b7.jpg"
    },
    {
      description: "warhorse-skeleton",
      imageUrl: "https://cdn10.bigcommerce.com/s-9928fbt/products/2281/images/3941/Boneyard29a__29382.1620874046.1280.1280.jpg?c=2"
    },
    {
      description: "water-elemental",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/84/1000/1000/636252736680781387.jpeg"
    },
    {
      description: "weasel",
      imageUrl: "https://koboldpress.com/wp-content/uploads/2019/08/weasel-albino-death.jpg"
    },
    {
      description: "werebear-bear",
      imageUrl: "https://www.aidedd.org/dnd/images/wereBear.jpg"
    },
    {
      description: "werebear-human",
      imageUrl: "https://5e-spelljammer.github.io/img/adventure/CoS/Kiril%20Stoyanovich.jpg"
    },
    {
      description: "werebear-hybrid",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/a/ab/Lywerber.gif/revision/latest?cb=20210131094442"
    },
    {
      description: "wereboar-boar",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/80/1000/1000/636252735506840152.jpeg"
    },
    {
      description: "wereboar-human",
      imageUrl: "https://5e-spelljammer.github.io/img/adventure/CoS/Kiril%20Stoyanovich.jpg"
    },
    {
      description: "wereboar-hybrid",
      imageUrl: "https://i.pinimg.com/236x/e1/28/b5/e128b599ea9428a72eca7937e57b48fa.jpg"
    },
    {
      description: "wererat-human",
      imageUrl: "https://i.pinimg.com/originals/2a/d0/50/2ad0504d93a64135266e9d21e35ad1dc.jpg"
    },
    {
      description: "wererat-hybrid",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/b/b7/Wererat-5e.png/revision/latest?cb=20171011033214"
    },
    {
      description: "wererat-rat",
      imageUrl: "https://i.imgur.com/xtDq7BI.jpg"
    },
    {
      description: "weretiger-human",
      imageUrl: "https://5e-spelljammer.github.io/img/adventure/CoS/Kiril%20Stoyanovich.jpg"
    },
    {
      description: "weretiger-hybrid",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/76/1000/1000/636252734783831163.jpeg"
    },
    {
      description: "weretiger-tiger",
      imageUrl: "https://i.pinimg.com/originals/9c/23/4a/9c234acd09fe5a731b6b8b5be80ec48f.png"
    },
    {
      description: "werewolf-human",
      imageUrl: "https://i.pinimg.com/originals/9d/f7/4f/9df74f9e090215ef1e86d9dae813db9e.png"
    },
    {
      description: "werewolf-hybrid",
      imageUrl: "http://pm1.narvii.com/7126/7becaece1eb8dad18f8324ac224fe768649729acr1-495-619v2_00.jpg"
    },
    {
      description: "werewolf-wolf",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/74/1000/1000/636252734224239957.jpeg"
    },
    {
      description: "white-dragon-wyrmling",
      imageUrl: "https://www.pngitem.com/pimgs/m/254-2542064_d-d-white-dragon-wyrmling-hd-png-download.png"
    },
    {
      description: "wight",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/56/1000/1000/636252726349692861.jpeg"
    },
    {
      description: "will-o-wisp",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/585/1000/1000/636376363763232290.jpeg"
    },
    {
      description: "winter-wolf",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/7/71/Winterwolves.jpg/revision/latest?cb=20190815085152"
    },
    {
      description: "wolf",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg"
    },
    {
      description: "worg",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/52/1000/1000/636252724662073178.jpeg"
    },
    {
      description: "wraith",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/50/1000/1000/636252724191790008.jpeg"
    },
    {
      description: "wyvern",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/48/1000/1000/636252723695596000.jpeg"
    },
    {
      description: "xorn",
      imageUrl: "https://static.wikia.nocookie.net/forgottenrealms/images/a/a0/Xorn4e.jpg/revision/latest?cb=20190815151559"
    },
    {
      description: "young-black-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/70/1000/1000/636252732861675698.jpeg"
    },
    {
      description: "young-blue-dragon",
      imageUrl: "https://i.pinimg.com/originals/da/e8/c8/dae8c88385e5e524dce796aa2ce5edd1.jpg"
    },
    {
      description: "young-brass-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/66/1000/1000/636252731911060874.jpeg"
    },
    {
      description: "young-bronze-dragon",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/64/1000/1000/636252731269768088.jpeg"
    },
    {
      description: "young-copper-dragon",
      imageUrl: "https://i.pinimg.com/originals/46/1b/9f/461b9f2e6f8778ef9a64a4365db04134.jpg"
    },
    {
      description: "young-gold-dragon",
      imageUrl: "https://www.pngarea.com/pngs/15/5325310_drake-png-dd-young-gold-dragon-transparent-png.png"
    },
    {
      description: "young-green-dragon",
      imageUrl: "https://i.pinimg.com/originals/ff/21/67/ff21675be4fd7d2938d19e66be9b570a.jpg"
    },
    {
      description: "young-red-dragon",
      imageUrl: "https://i.pinimg.com/originals/0a/30/30/0a3030fc3e333aa36e12e8c9c694adf1.jpg"
    },
    {
      description: "young-silver-dragon",
      imageUrl: "https://i.pinimg.com/originals/46/7e/a2/467ea252f4b84e88867875aff83c4364.jpg"
    },
    {
      description: "young-white-dragon",
      imageUrl: "https://i.pinimg.com/originals/90/f9/9f/90f99fe720143be841a9ed5893f6438f.jpg"
    },
    {
      description: "zombie",
      imageUrl: "https://www.dndbeyond.com/avatars/thumbnails/0/71/1000/1000/636252733510786769.jpeg"
    }
  ]
};

export default monsterImages;








