import React from 'react'
import styles from  './Team.module.css';
import TeamCard from './TeamCard/TeamCard';

const teamsData = [
  {
    id : 1,
    avtar :  "https://s3-alpha-sig.figma.com/img/784c/a048/0a24632f9dad48719238ddf2884a0863?Expires=1696809600&Signature=XdNUJYFOj7fR5lvO4DGOpqiXZFKCkVRQu5UBxYB~LjO3poQsla2d7tpQ9-F7diRkcN1O1XfWFGBDnK36IGT6frcWzhqSLHUB17JqQzA6GKVL6rTbbABFgcb1Tb2k0NUGvjxKjAIbTwhKx0K8BGM1Eu-n~GbT4KNF7jRV0t0HqtUZ6ckppBp4TD5YHX9yI6W9zjR6x~~T7MlL3w-1DnpCS2Qp3wJ8p1GC7JJeFqbgGnsXARxpKlIaxyx4899AmB5-TJnjga~GcpOYlGHPwIDBAC0CBMDqHtH09oD3IsC7RpW3-IMv~AEr2h2PM-CxEzKRPa6pmlmCSAuTQC7rRJN~KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Danial Def",
    cases : "301 Cases"
  },
  { 
    id : 2,
    avtar :  "https://s3-alpha-sig.figma.com/img/fcbf/a365/10f4e73f38a7ff1fab32f2fc0db010f9?Expires=1696809600&Signature=YvMPkGzfC27RTMf4~KMMRpbUPY2uuEcP7ZrC5MfI0bonnQE--rcHxqF-dCLLfazpAqeIEn3OkPi85bRfFQ7uZFgyRvR2bSbbSb66dPdozfVKA5o2uvFBTb8mgkB6huO7GR3a0-0Vp6YseT~7LsKh3GC5V~4waxUaq3o3KxGwgX4YbR1RShk2~6wZTZUG2I451a4xgqOqBU32QUbzVGzx9Yf00JFYAuygcAkqYs5DnX6y6HgmCbTk4-6p644DrtYctPkuoAXqZU~4ONTtBVqU3hqjH9cL1KTDDZCAhOYRClRzCuEGt6-2xOwEKMDTRE-PCvxuX2u5HxZSDT~OeKYO7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Sanfole",
    cases : "850 Cases"
  },
  { 
    id : 3,
    avtar :  "https://s3-alpha-sig.figma.com/img/be47/616a/4ce30b5d2f2773c5785f9dc061ceff73?Expires=1696809600&Signature=jAU35G8YbLMUf8~sCGY0frXlRU0nbKNjj-Uzmaq3jn7OxDFa4setlgeW8wnKRaEhjeOWlbHWgRdXRYmJ6mHw4KjIgcGPJamb4-XvBdnYU6Yy-UiQia-1KuQ~iti2sMYWsfzSUgOIK~ezZU9-6bLInHmY-iGpOoKP3UzUwVMHhD34L3P1Ofs14CJkh0-vlECZUQUmcj87SePj0sVcbytyjeHDvWRr5zt9o6sxMauXe5O~1M1g8IHyorHN-k~zvMIPaY~QB3rgT60DPBn1kmeIXEV2PEHQC099iy9aVgeRiqyBHzWhxWva6tZZWkwQcgzYZnl1VCpiSTRP~gslZUhZ~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Cesforila",
    cases : "470 Cases"
  },
  {
    id : 4,
    avtar :  "https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1696809600&Signature=HZz3NODXm8234v29UbtzV2yscQOlXGGI6QhBLuHqd41Q6F6pglCzNyF4EPbHAYcssaB9o~vfZZC14Z3nqsO81nbMjyYzhrYRYZzrf57WF6A0DteuvU4J4aCAc0w8KIqi0vBkjqDHVfxAoPS1qdhz55dGGnUNOcWsYOthIECi~sb8s2jsfUBy3bPYOMkpZ8J6i18b1TUb4fIDmh4PGRvcJ84VmGrLtbfseOZ7CQjEfhrZgpRH5uIZZTk5l9R3DT6KOJUupdIav0L4~DTn0TcsMM5hVqyc2E3FhKVY6ieM~qRELG-nvhvPs5tjaBxBXfNaMJu5s6RmkiT3f5GpjQVTEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Colleen",
    cases : "180 Cases"
  },
  {
    id: 5,
    avtar :  "https://s3-alpha-sig.figma.com/img/7c39/0357/7eb6afb7619fa84a07e3dd6f32a0f3d2?Expires=1696809600&Signature=Zbb78bD6cU-Nh~veToNRheqMEFiS0Szu-4MVWX~Mwgzgx7MCpOizV4TcAdU2PZQKvCdHz4fBKr6W9OkNkzhhAzsF4LG6Eyefdpg58PmRnreGZ071RO3BziwjjIiAXIziRE~Dh4ImTuGl3LlRoS0n1bQe6s~ORw2DSsyp0yMFWTfULl7J1~xo~7yf8gqpgTGfEwCfvy0tTXoPukbtwQSdum225Eou1JMQkx9SsmEpgvvpXsupNpy9tqtaomnXV4zE9zHLeWv213Ie9N1xcPD0Cd9mpv97iLdE5jpKHxTE4Xy0kIsDkvbbenE7H1bnHdMVj2V0RgerPv7kNm7WD4b-rQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Haldone",
    cases : "212 Cases"
  },
  {
    id: 6,
    avtar :  "https://s3-alpha-sig.figma.com/img/d049/c93c/f2e5d156c527337371de70eef0230a60?Expires=1696809600&Signature=Byj2O-EUco8hOUi-P6yHjKHke7a4HcM7xPF1ncYIcHnr-f57vo6aLqSFFY7WNbLDLepIta8FzDyiC8Ei2FEhPtlICMbbLjF99ViuI9UlpHquKfg0gqb8ZE7hXZCjFTXFIY9jwG3s12SQ4MbYoY6YrwEuGgMkTyIESTlEXTfseQtl4yHPZIxaX7c3D2RoKC1P10wEc4qf8ToiWV4x5JWCBJeMOLIM-CCWuGz7Bwu5AiXHWGmhzesaJqq-PT8c-HYyLj-faRdKIydGmFNalAZQ3AqXpTYvqqZniDBghIMfRDMQcgIW1BVfGxntMtN89iHf9RfyvEMje36Yv95OYejCew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    name : "Nik Jeo",
    cases : "350 Cases"
  },
]


const Team = () => {
  return (
    <div className={styles.team_wrapper}>
        <p className={styles.title}>Out Team</p>
        <div className={styles.team_card_wrapper}>
              {
                teamsData?.map(ele =>{
                  return (
                    <TeamCard  key={ele.id} data={ele} />
                  )
                })
              }
        </div>
    </div>
  )
}

export default Team;