import  { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classes from './DetailsPage.module.css';
import FloatingChatIcon from './FloatingChatIcon';
import SidePanel from '@/components/SidePanel/SidePanel';
import DetailedView from '@/components/DetailedView/DetailedView';

function DetailsPage() {
	const containerRef = useRef(null);

	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isDragging, setIsDragging] = useState(false);

	let animationClass = 'collapsed';

	if (isSidebarOpen) {
		animationClass = 'open';
	}

	return (
		<div className={classes['details-page-container']}>
			<motion.div
				className={`${classes.chat_feed} ${!isSidebarOpen ? classes.collapsed : ''}`}
				initial={false}
				animate={animationClass}
				variants={{
					open: {
						width: '432px',
						height: '100%',
						borderRadius: '0px',
						padding: 0,
						maxHeight: 'unset',
						minHeight: 'unset',
						x: 0,
					},
					collapsed: {
						width: '56px',
						height: '56px',
						borderRadius: '50%',
						backgroundColor: '#fff',
						borderRight: 'unset',
						maxHeight: 'unset',
						zIndex: '999999',
					},
				}}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 15,
				}}
				drag={false}
				onDragStart={() => setIsDragging(true)}
				dragConstraints={containerRef}
				dragElastic={0.1}
				onDragEnd={() => {
					setIsDragging(false);
				}}
			>
				{isSidebarOpen && (
					<div className={classes.side_panel}>
						<SidePanel />
					</div>
				)}
				{!isSidebarOpen && (
					<div
						className={classes.chat_icon_container}
						role="presentation"
						onClick={() => {
							if (isDragging) {
								return;
							}
							setIsSidebarOpen(true);
						}}
					>
						<FloatingChatIcon />
					</div>
				)}
			</motion.div>

			<motion.div
				initial={false}
				animate={{
					marginLeft: !isSidebarOpen ? '0px' : '432px',
					width: !isSidebarOpen ? '100%' : 'calc(100% - 432px)',
				}}
				transition={{
					marginLeft: {
						type: 'spring',
						stiffness: 100,
						damping: 15,
						delay: !isSidebarOpen ? 0.25 : 0,
					},
					width: {
						duration: 0,
						delay: !isSidebarOpen ? 0.25 : 0,
					},
				}}
			>
				<DetailedView />
			</motion.div>
		</div>
	);
}

export default DetailsPage;
