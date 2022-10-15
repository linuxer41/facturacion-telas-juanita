interface DateRanges {
	label: string;
	key: string;
	range: Date[];
}
import {
	endOfDay,
	endOfMonth,
	endOfWeek,
	endOfYear,
	startOfDay,
	startOfMonth,
	startOfWeek,
	startOfYear,
	subDays,
	subMonths,
	subWeeks,
	subYears
} from 'date-fns';
export function getDateRanges(): DateRanges[] {
	const now = new Date();
	const date_ranges = [
		{
			label: 'Ultimos 30 dias',
			key: 'last_30_days',
			range: [startOfDay(subDays(now, 30)), endOfDay(now)]
		},
		{
			label: 'Hoy',
			key: 'today',
			range: [startOfDay(now), endOfDay(now)]
		},
		{
			label: 'Ayer',
			key: 'yesterday',
			range: [startOfDay(subDays(now, 1)), endOfDay(subDays(now, 1))]
		},
		{
			label: 'Semanal',
			key: 'this_week',
			range: [startOfWeek(now), endOfWeek(now)]
		},
		{
			label: 'Semana anterior',
			key: 'last_week',
			range: [startOfWeek(subWeeks(now, 1)), endOfWeek(subWeeks(now, 1))]
		},
		{
			label: 'Mensual',
			key: 'this_month',
			range: [startOfMonth(now), endOfMonth(now)]
		},
		{
			label: 'Mes anterior',
			key: 'last_month',
			range: [startOfMonth(subMonths(now, 1)), endOfMonth(subMonths(now, 1))]
		},
		{
			label: 'Anual',
			key: 'this_year',
			range: [startOfYear(now), endOfYear(now)]
		},
		{
			label: 'Año anterior',
			key: 'last_year',
			range: [startOfYear(subYears(now, 1)), endOfYear(subYears(now, 1))]
		}
	];
	return date_ranges;
}
