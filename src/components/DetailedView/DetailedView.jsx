import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { Flag, TableChart } from '@mui/icons-material';
import ChartSection from './ChartSection/ChartSection';
import styles from './DetailedView.module.css';

function HeaderBar({ selectedCard }) {
	return (
		<div className={styles.header}>
			<div className={styles.leftSection}>
				<ReportProblemIcon
					className={styles.iconWarning}
					style={{ width: '16px', height: '16px' }}
				/>
				<span className={styles.title}>Sample Stack</span>
				<div className={styles.divider} />
				<span className={styles.stackIdLabel}>
					Stack Id: <span className={styles.stackIdValue}>{selectedCard}</span>
				</span>
				<TableChart
					style={{ width: '16px', height: '16px' }}
					className={styles.tableIcon}
				/>
			</div>

			<div className={styles.forecastBox}>
				<div className={styles.forecastCard}>
					<div className={styles.forecastLabel}>FORECAST</div>
					<div className={styles.forecastValue}>89%</div>
				</div>
				<div className={styles.forecastCard}>
					<div className={styles.forecastLabel}>FORECAST</div>
					<div className={styles.forecastValue}>80%</div>
				</div>
			</div>

			<Flag className={styles.flagIcon} />
		</div>
	);
}

export default function DetailedView({
	selectedCard,
	filteredSelectedData = {},
}) {
	const { historicalData, forecastData } = filteredSelectedData;

	const mergedData = [...historicalData, ...forecastData];

	return (
		<div className={styles.container}>
			<HeaderBar selectedCard={selectedCard} />

			<div className={styles.controls}>
				<div className={styles.switchContainer}>
					<div className={styles.title}>SPECIAL REQUIREMENTS</div>
					<label className={styles.switch}>
						<input type="checkbox" />
						<span className={styles.slider} />
					</label>
				</div>
			</div>

			<div className={styles.chart_section}>
				<ChartSection selectedCard={selectedCard} />
			</div>

			<div className={styles.dataTable}>
				<div className={styles.row}>
					<span style={{ marginRight: '20px' }}>Data 1</span>
					{mergedData.map((item, index) => (
						<span key={index} style={{ minWidth: '72px' }}>
							{item.actual}
						</span>
					))}
				</div>
				<div className={styles.row}>
					<span style={{ marginRight: '20px' }}>Data 1</span>
					{mergedData.map((item, index) => (
						<span key={index} style={{ minWidth: '72px' }}>
							{item.finalForecast}
						</span>
					))}
				</div>
				<div className={styles.row}>
					<span style={{ marginRight: '20px' }}>Data 1</span>
					{mergedData.map((item, index) => (
						<span key={index} style={{ minWidth: '72px' }}>
							{item.aiForecast}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
