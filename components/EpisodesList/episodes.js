import moment from "moment";

const episodes = [
  {
    id: 1,
    title: "Whitepaper Whitewashing & History of The Flippening",
    date: "Friday, 22nd January 2021",
    dateRSS: new Date(2021, 0, 22),
    bchAddress: "bitcoincash:qq0u3gej2rw9elpe42pp4cy25qknh2r0fvgfnpv7qm",
    mp3: "https://drive.google.com/file/d/1b_Ra-IX1Lxt6X4doRVeLnxOogsaLwl1a/view?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=_uimCmw1m9E",
  },
  {
    id: 2,
    title: "Grassroots adoption & /r/wallstreetbets vs Wall Street",
    date: "Thursday, 28th January 2021",
    dateRSS: new Date(2021, 0, 28),
    bchAddress: "bitcoincash:qqldcn9p2qupgkmq4ctrqujyd4ju2m94y5fq680hye",
    mp3: "https://drive.google.com/file/d/1H4Hx3hGGA7iDQj5YluuC9sKGGNPUYmTM/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1wshYxnpvvBe_e4PnzNIEQwVCSCi8AAzldGyuHQNfLB8/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=voVS2omxMek",
  },
  {
    id: 3,
    title: "Elon Musk hypes Bitcoin & Crypto Convert Q&A",
    date: "Saturday, 30th January 2021",
    dateRSS: new Date(2021, 0, 30),
    bchAddress: "bitcoincash:qzm49092tapkkuzvlr2q5hkv0un6rucq4vvspptszt",
    mp3: "https://drive.google.com/file/d/1ml9J4zMKoU8ogvGvgN5l2cDq3eO0jTgo/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1BpjPtjRl15VQ2ETqFG20ACtNu0lar3aXs5diLCsdIGc/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=6ZB9Oa2TUjk",
  },
  {
    id: 4,
    title: "Community Debate & Bitcoin Cash vs Bitcoin",
    date: "Sunday, 7th February 2021",
    dateRSS: new Date(2021, 1, 7),
    bchAddress: "bitcoincash:qzkkzt34vdmf6rm98ndhhuf5l5d038jp25l7trwrl6",
    mp3: "https://drive.google.com/file/d/1W9cy6mfDvuRCsWgImO2oTvnKbQcAeTsC/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1XfZypaYYnkm74CNvkknhLx6BSVIWwY6fO5Pm110wCRI/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=2nC9xMLyPg4",
  },
  {
    id: 5,
    title: "Tesla Buys Bitcoin & Why Cryptocurrencies",
    date: "Wednesday, 10th February 2021",
    dateRSS: new Date(2021, 1, 10),
    bchAddress: "bitcoincash:qre8lu4lasfn9kaxgaayhslh6wz2hvqtpvl2tgf75l",
    mp3: "https://drive.google.com/file/d/1HbMum9RvhoetM5Z1xvWLto2e0LOmNVF9/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1ebXNt-6AucTufG2xAW4L3j4jsLfORArH4j0Y23aAdDg/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=AEpQIEEcTUI",
  },
  {
    id: 6,
    title: "Transaction Flippening & How Adoption Happens",
    date: "Sunday, 21st February 2021",
    dateRSS: new Date(2021, 1, 21),
    bchAddress: "bitcoincash:qq9tztlr2cqnx5m4plvsm93kjl3kv003dgg6suppj6",
    mp3: "https://drive.google.com/file/d/1zBdbPFPjW5YJlSn5RwS1PaQSOPs_0ylo/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1GA7bCSuxIK_Ss3jL7I3Piu2Xx7KkBkdD3zofATWBUnc/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=7wTBSyPkS2w",
  },
  {
    id: 7,
    title: "Tether Investigation & Cryptocurrency Volatility",
    date: "Sunday, 28th February 2021",
    dateRSS: new Date(2021, 1, 28),
    bchAddress: "bitcoincash:qq57k9jgq9anfuvnp02z5zmav4kxs6jn7qzywcjh84",
    mp3: "https://drive.google.com/file/d/1wVFhFuA7kFmXyCCdIcV5F9ZNLAZYENAk/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1AuN_Z6pMBfOjHipi2WlvO9302HjF-PIQhv2YowfKqj8/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=PYUj7VqVJ_U",
  },
  {
    id: 8,
    title: "The Path To Global Adoption",
    date: "Sunday, 7th March 2021",
    dateRSS: new Date(2021, 2, 7),
    bchAddress: "bitcoincash:qq62hdqp0hsa23qtevknnqy5nu03nwjn5u9fh4ypjr",
    mp3: "https://drive.google.com/file/d/1GHMQoOHVb5XRMRCwh2-LJP5SCcVdOARk/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1rOvOaAzGc-xAw39KtvK1p3erZpNIrh_vUIdS0cvUgzM/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=chaOSbdZsPk",
  },
  {
    id: 9,
    title: "Bitcoin Forks & Adoption In Detroit",
    date: "Wednesday, 10th March 2021",
    dateRSS: new Date(2021, 2, 10),
    bchAddress: "bitcoincash:qq62hdqp0hsa23qtevknnqy5nu03nwjn5u9fh4ypjr",
    mp3: "https://drive.google.com/file/d/1jga8KYTVb0SBdVHV44dq5_uaB21q0wBh/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1IFQB93rRJ7C7XENrTxZgpLs3yM_GCcxlwu19-cm2WCo/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=lCucgcEevVw",
  },
  {
    id: 10,
    title: "Cryptocurrency gets cool & the Bitcoin (BTC) Bubble",
    date: "Wednesday, 17th March 2021",
    dateRSS: new Date(2021, 2, 17),
    bchAddress: "bitcoincash:qrxxgp6wkc2k90xej9r8y8xc7t98ecykmy58m3z8fm",
    mp3: "https://drive.google.com/file/d/1avOSmC9jNB2giletmVcQZeAr5hnBU2Yn/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1rjZ4VQqiXkuyY7CWPGIcHEVhIWx0Y2_4ANf_43Hi3O4/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=vxHpRog6nGk",
  },
  {
    id: 11,
    title: "Elon Musk considering BCH? NFTs & SLP",
    date: "Friday, 26th March 2021",
    dateRSS: new Date(2021, 2, 26),
    bchAddress: "bitcoincash:qranaxulgyatp5rpzgp89c3jan5uveq0pg6t6jpyz8",
    mp3: "https://drive.google.com/file/d/148T9rw99TmsYWA26XjqnXt2gXMg4JJbq/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1I_aR05x8CVeJo9s80VA-ENe3DicXyg18zLu9VZywUXw/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=YI1IiDlf5yc",
  },
  {
    id: 12,
    title: "Censored Kim Dotcom BCH vs BTC Debate Commentary",
    date: "Sunday, 4th April 2021",
    dateRSS: new Date(2021, 3, 4),
    bchAddress: "bitcoincash:qrvwejwh0gd72d4uhe26lccq8zfpqzrsd50uv0jg8z",
    mp3: "https://drive.google.com/file/d/1rfMAE3Ey5ElS5O-ZtXWjBZqn8hpj_hSO/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1PjhEJv6P_Y5ZhCrrI_EvHjC5YneSgGpD2DwxLEKu7CA/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=TE9aE9rFSUs",
  },
  {
    id: 13,
    title: "The Flippening Begins? & Proof of Passion",
    date: "Tuesday, 13th April 2021",
    dateRSS: new Date(2021, 3, 13),
    bchAddress: "bitcoincash:qzulytrwhw902fgc9rnpxuj4tzwwnphwdccfphwwc6",
    mp3: "https://drive.google.com/file/d/1M63uokaWk-FT5gOx6DKmq-TKuxFO-q_L/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1XIZ-nqwbt92GD5dthZXAEsxf0Le57T5Y6_l4nNh-jXk/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=zjNWBsqKjaM",
  },
  {
    id: 14,
    title: "The Flippening Accelerates & BCH, Dogecoin Surge",
    date: "Thursday, 22nd April 2021",
    dateRSS: new Date(2021, 3, 22),
    bchAddress: "bitcoincash:qqm8u74mc67qjqcwqhnma4j0xyuaedal4ugk9k22tq",
    mp3: "https://drive.google.com/file/d/1gya0i6EJlg7z5WzydeydojqnAUsrjGAd/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1VgyBJWFJrJhUajznQBFkle6yexAm4VzX6UwtgYupBe0/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=1bF25jEXYbE",
  },
  {
    id: 15,
    title: "Peter vs Spencer Schiff & Crypto Content Creation",
    date: "Sunday, 25th April 2021",
    dateRSS: new Date(2021, 3, 25),
    bchAddress: "bitcoincash:qpyp7na3fnsxlfy8pfehhensvw3c3vndlqxh4gmkd9",
    mp3: "https://drive.google.com/file/d/1zxqBWb7sr53zH3kSxaes6a1lvaSM5S85/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1oEHRBG50JjC7oui04QEGeWFp0qm4Kw8Mta_hjhNkpao/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=LKtwgXf7h3w",
  },
  {
    id: 16,
    title: "BCH around the world & Cryptocurrency Communities",
    date: "Sunday, 2nd May 2021",
    dateRSS: new Date(2021, 4, 2),
    bchAddress: "bitcoincash:qzle3wdqtdcsfaes75999tdkh39m4n5exqrx3s6s2",
    mp3: "https://drive.google.com/file/d/1NYugC6NjUegc7602WKOLYqngL5Hk8Q-t/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1YpDTloElm5SuH_4bnN2vl1f6eZI_hoO7C01vVkuKSFM/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=GHH9PKFu16M",
  },
  {
    id: 17,
    title: "BCH in Argentina & History of Cryptocurrency",
    date: "Sunday, 9th May 2021",
    dateRSS: new Date(2021, 4, 9),
    bchAddress: "bitcoincash:qpgjlz7q83xycmxp5456gzf7xrsdm0su5s2264y6v6",
    mp3: "https://drive.google.com/file/d/1AmfrpSZ0npKRZuJ8-RMyQ1Pjz6rGPOFg/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1ymW4E4oDAZZVkv84wLz88JjzB1Wpcm41dDC1Exo-8N0/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=Nk6GvmByv2U",
  },
  {
    id: 18,
    title: "Elon dumps BTC & BCH in South America",
    date: "Wednesday, 19th May 2021",
    dateRSS: new Date(2021, 4, 19),
    bchAddress: "bitcoincash:qqhpwr0ejmxc540aqs660nvgymte6v4wxyd8t28xkk",
    mp3: "https://drive.google.com/file/d/1Am6s_feiEb4V1uuUCq4f6f1EMyuNJaG0/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1hfYx2glqoNcAMauSvUOGmANTDwQfCNwWhTh9iAXqzPg/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=CcCYULAtqUs",
  },
  {
    id: 19,
    title: "The Great Crypto Debate Commentary",
    date: "Wednesday, 26th May 2021",
    dateRSS: new Date(2021, 4, 26),
    bchAddress: "bitcoincash:qqtlfhjgyavzzzj0cs5m9gdwu57j9engwvg85jq27g",
    mp3: "https://drive.google.com/file/d/1I1DjsmSe41nxXgKTr55KEXYzyeyUhAoR/view?usp=sharing",
    slideDeck: "",
    youtube: "https://www.youtube.com/watch?v=5miZGjcFgKY",
  },
  {
    id: 20,
    title: "Crypto vs Government",
    date: "Friday, 28th May 2021",
    dateRSS: new Date(2021, 4, 28),
    bchAddress: "bitcoincash:qp3mmpdkwpkdjhc8mcc6zxrwl45p58tpkclzzj503j",
    mp3: "https://drive.google.com/file/d/1_XNbz_c5NYY0JUSZffaqcFFd-UZH__3B/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1HwdKwmwkl8IhEGAwE398XRNnrTOR9smanEsLk2m8IPk/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=1XvlNIJDyfI",
  },
  {
    id: 21,
    title: "Satoshi Pyramid & Mining Incentives",
    date: "Friday, 4th June 2021",
    dateRSS: new Date(2021, 5, 3),
    bchAddress: "bitcoincash:qpcys35r6qe0rl27v5fd3gep6pg0cny9g5pclga2hh",
    mp3: "",
    slideDeck:
      "https://docs.google.com/presentation/d/1XxjLVSxB3YtmYouFLhh6jKFCHUV-aPjlSsjzQ_az-ZU/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=v66It2H-rUM",
  },
  {
    id: 22,
    title: "Dan Held (BTC) & Vitalik Buterin (ETH) on BCH",
    date: "Monday, 14th June 2021",
    dateRSS: new Date(2021, 5, 14),
    bchAddress: "bitcoincash:qr3tmltw69hdzgmw6nvyk4jt6gvsrcks65za7pc4jx",
    mp3: "https://drive.google.com/file/d/1Y8lbFs702GGZ-YLWKWr17hAGBkCZFaXq/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/14xqDKSZfnpPYgQqqLNzTqSHkRunPPr_u4y_uJhoJy0Y/edit?usp=sharing",
    youtube: "https://www.youtube.com/watch?v=GxVV26fFjms",
  },
  {
    id: 23,
    title: "Investing & Entrepreneurialism feat. Marc de Mesel",
    date: "Saturday, 3rd July 2021",
    dateRSS: new Date(2021, 6, 3),
    bchAddress: "bitcoincash:qr3tmltw69hdzgmw6nvyk4jt6gvsrcks65za7pc4jx",
    mp3: "https://drive.google.com/file/d/1s0to9O72GiWa4IW7U5iM-_dMdc1LFlkw/view?usp=sharing",
    slideDeck:
      "https://docs.google.com/presentation/d/1FMb-L_Uk4r3G6cxh-74uPATIS-_LDd1fy0Ds9dem3Ig/edit",
    youtube: "https://www.youtube.com/watch?v=uabnHX246Ow",
  },
];

export default episodes;
