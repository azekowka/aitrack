"use client"
import AppointmentsPage from '@/components/calendar/AppointmentsPage';


export default function Dashboard() {
  
  return (
    <div className="flex">
      <div className="flex-1">
        <AppointmentsPage/>
      </div>
    </div>
  );
}