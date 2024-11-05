export default function Dashboard() {
	return (
		<div className="flex-1 p-6 ml-64">
			<div className="space-y-6">
				{/* Search Functionality */}
				<div className="flex justify-between items-center mb-6">
					<input
						type="text"
						placeholder="Search projects, tasks, team members..."
						className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Quick Actions */}
				<div className="flex space-x-4 mb-6">
					<button className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
						Create New Project
					</button>
					<button className="p-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
						Create New Task
					</button>
				</div>

				{/* Active Projects */}
				<div className="bg-white p-6 shadow-md rounded-md">
					<h2 className="text-xl font-semibold mb-4">Active Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="p-4 border rounded-md hover:shadow-lg transition">
							<h3 className="font-semibold">Project A</h3>
							<p>Status: In Progress</p>
							<p>Deadline: 2024-11-15</p>
						</div>
						<div className="p-4 border rounded-md hover:shadow-lg transition">
							<h3 className="font-semibold">Project B</h3>
							<p>Status: Review</p>
							<p>Deadline: 2024-11-20</p>
						</div>
						<div className="p-4 border rounded-md hover:shadow-lg transition">
							<h3 className="font-semibold">Project C</h3>
							<p>Status: Completed</p>
							<p>Deadline: 2024-11-10</p>
						</div>
					</div>
				</div>

				{/* Upcoming Tasks */}
				<div className="bg-white p-6 shadow-md rounded-md">
					<h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
					<ul className="space-y-4">
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<div className="flex justify-between items-center">
								<span>Design Meeting</span>
								<span className="text-sm text-gray-500">Due: Tomorrow</span>
							</div>
						</li>
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<div className="flex justify-between items-center">
								<span>Code Review for Project A</span>
								<span className="text-sm text-gray-500">Due: In 2 days</span>
							</div>
						</li>
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<div className="flex justify-between items-center">
								<span>Client Presentation</span>
								<span className="text-sm text-gray-500">Due: In 3 days</span>
							</div>
						</li>
					</ul>
				</div>

				{/* Notifications */}
				<div className="bg-white p-6 shadow-md rounded-md">
					<h2 className="text-xl font-semibold mb-4">Notifications</h2>
					<ul className="space-y-4">
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<span>Project A: John commented on your task.</span>
						</li>
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<span>Project B: New deadline updated by Sarah.</span>
						</li>
						<li className="p-4 border rounded-md hover:shadow-lg transition">
							<span>Project C: Documentation has been approved.</span>
						</li>
					</ul>
				</div>

				{/* Calendar View */}
				<div className="bg-white p-6 shadow-md rounded-md">
					<h2 className="text-xl font-semibold mb-4">Calendar View</h2>
					<div className="bg-gray-100 p-4 rounded-md">
						<p>
							Calendar component placeholder - display upcoming deadlines,
							meetings, and milestones here.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
