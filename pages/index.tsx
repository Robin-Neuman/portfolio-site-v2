import Head from 'next/head';
import styles from '@/styles/home.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '@/hooks/useOnScreen';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import logo from '../public/logo-rn.svg';
import profilePic from '../public/profile_pic.jpg';
import dog1 from '../public/dog_snow.jpg';
import dog2 from '../public/dog_field.jpg';
import forest from '../public/forest.jpg';
import transactor from '../public/transactor.jpg';

export default function Home() {
	const [tagVis, setTagVis] = useState({
		h1: false,
		h2: false,
		p1: false,
		p2: false,
		img: false,
		s1: false,
		s2: false,
		second: false,
		third: false,
		fourth: false,
	});

	const second = 1000;

	let secondSectRef = useRef<HTMLInputElement>(null);
	let thirdSectRef = useRef<HTMLInputElement>(null);
	let fourthSectRef = useRef<HTMLInputElement>(null);

	let isSecondVisible = useOnScreen(secondSectRef, () => handleTag('second', true, false));
	let isThirdVisible = useOnScreen(thirdSectRef, () => handleTag('third', true, false));
	let isFourthVisible = useOnScreen(fourthSectRef, () => handleTag('fourth', true, false));

	const handleTag = (name: string, vis: boolean, timeMultiplier: number | boolean) => {
		if (timeMultiplier && typeof timeMultiplier === 'number') {
			setTimeout(() => {
				setTagVis((tags) => ({
					...tags,
					[name]: vis,
				}));
			}, second * timeMultiplier);
		} else {
			setTagVis((tags) => ({
				...tags,
				[name]: vis,
			}));
		}
	};

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			handleTag('p1', true, 0.7);
			handleTag('h1', true, 1.8);
			handleTag('img', true, 1.8);
			handleTag('h2', true, 2.4);
			handleTag('p2', true, 3.8);
		}
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div className={styles.mainCont}>
			<div className={styles.topLeftFixed}>
				<Image className={styles.logo} src={logo} width='120' height='120' alt='' />
				<div className={styles.socials}>
					<a
						className={styles.icon}
						href='https://www.linkedin.com/in/robin-neuman-226511a5/'
						onMouseOver={() => handleTag('s1', true, false)}
						onMouseLeave={() => handleTag('s1', false, false)}>
						<FontAwesomeIcon icon={faLinkedin} size='3x' />
					</a>
					<a
						className={styles.icon}
						href='https://github.com/Robin-Neuman'
						onMouseOver={() => handleTag('s2', true, false)}
						onMouseLeave={() => handleTag('s2', false, false)}>
						<FontAwesomeIcon icon={faGithub} size='3x' />
					</a>
				</div>
			</div>
			<Head>
				<title>Robin Neuman Fullstack</title>
				<meta
					name='description'
					content="Need a developer to bring your project to the next level, or maybe a slack bot to pester your coworkers with (un)funny puns? Then I'm your guy 👍"
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/logo-rn.svg' />
			</Head>
			<div className={styles.heroCont}>
				<div className={styles.hero}>
					<div className={styles.heroText}>
						<p className={tagVis.p1 ? styles.paragraph : styles.hidden}>Hi, my name is...</p>
						<h1 className={tagVis.h1 ? styles.mainHeader : styles.hidden}>Robin Neuman</h1>
						<h2 className={tagVis.h2 ? styles.subHeader : styles.hidden}>- Fullstack Developer</h2>
						<p className={tagVis.p2 ? styles.paragraph : styles.hidden}>I develop things.</p>
					</div>
					<Image
						className={tagVis.img ? styles.profilePic : styles.hidden}
						src={profilePic}
						width='300'
						alt=''
					/>
				</div>
			</div>
			<div className={styles.sectionCont} ref={secondSectRef}>
				{isSecondVisible === true || tagVis.second === true ? (
					<div className={styles.sectionInner}>
						<h4 className={styles.title}>About me</h4>
						<div className={styles.row}>
							<div className={styles.col}>
								<p className={styles.body}>Hello there stranger 👋</p>
								<p className={styles.body}>
									I am a soon-to-be mid-level Fullstack developer with almost three years of
									experience and am currently a self-employed contractor.
								</p>
								<p className={styles.body}>
									During my days I like to delve into the world of technology and software as much as
									I like to delve into vast forests with my dog. It helps me keep a fresh perspective
									on many things in life, and is a great time for pondering about difficult tasks that
									lay brewing.
								</p>
								<p className={styles.body}>
									My journey as a developer started in 2019 and my experience since then has been a
									steep learning curve, cramping everything that has to do with the internet and how
									to develop meaningful applications and websites for it in two short years. The
									tumultous nature of it was rewarding, as I found myself being one of the few
									developers on a startup project before my studies had even finished.
								</p>
								<p className={styles.body}>
									Looking at my situation today, I am proudly working to develop competetive software
									with other experienced industry seniors on the same startup as a self-employed
									contractor.
								</p>
							</div>
							<div className={styles.col}>
								<Image className={styles.picture} src={dog1} alt='' />
								<Image className={styles.picture} src={dog2} alt='' />
								<Image className={styles.picture} src={forest} alt='' />
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className={styles.sectionCont} ref={thirdSectRef}>
				{isThirdVisible === true || tagVis.third === true ? (
					<div className={styles.sectionInner}>
						<h4 className={styles.title}>Who have I worked with?</h4>
						<div className={styles.worked}>
							<div className={styles.row}>
								<a href='https://transactorsystems.com/'>
									<Image className={styles.pictureSmall} src={transactor} alt='' />
								</a>
								<h4 className={styles.subtitle}>Transactor Systems LTD</h4>
							</div>
							<p className={styles.body}>
								Transactor is a company based in England that provides dental lab software to both a UK
								and US customer base.
							</p>
							<p className={styles.body}>
								My work with Transactor has been to develop a SaaS application structure that ultimately
								aims to revolutionize both dental and dental lab software. Notable functionality that
								I've constructed from ground up includes:
							</p>
							<li className={styles.listItem}>Ordering</li>
							<li className={styles.listItem}>Chatting</li>
							<li className={styles.listItem}>Package tracking</li>
							<li className={styles.listItem}>Custom form building</li>
							<li className={styles.listItem}>Drawing tool</li>
							<p className={styles.body}>The applications included in the structure are as follows:</p>
							<li className={styles.listItem}>
								Node REST API with integrated external third party applications, which serves through
								routes and hooks
							</li>
							<li className={styles.listItem}>
								React client with integrated OAuth2.0 authentication through separate authentication
								server
							</li>
							<li className={styles.listItem}>
								OAuth2.0-based authentication server which serves a login page that provides tokens to
								any application needing access to the REST API
							</li>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className={styles.sectionCont} ref={fourthSectRef}>
				{isFourthVisible === true || tagVis.fourth === true ? (
					<div className={styles.sectionInner}>
						<h4 className={styles.title}>
							Question you probably have: Am I open to work with your company?
						</h4>
						<h4 className={styles.subtitle}>
							Good news: Yes, I am currently open to work part-time on any of your future exciting
							projects
						</h4>
						<h4 className={styles.title}>Follow up question: What is my price?</h4>
						<h4 className={styles.subtitle}>My current hourly rate as a self-employed contractor is:</h4>
						<h4 className={styles.pricing}>500 SEK/Hour</h4>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
