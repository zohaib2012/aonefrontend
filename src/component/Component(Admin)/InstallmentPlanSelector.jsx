import React, { useState } from 'react';
import { CheckCircle2, RefreshCcw } from 'lucide-react';

// Installment Plan Data Structure
const installmentPlans = [
    {
        id: 1,
        name: "6-Month Plan",
        description: "Short-term investment with moderate returns",
        interestRate: "5% per annum",
        minInvestment: "$500",
        maxInvestment: "$5,000",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-800"
    },
    {
        id: 2,
        name: "12-Month Plan",
        description: "Balanced investment with competitive returns",
        interestRate: "8% per annum", 
        minInvestment: "$1,000",
        maxInvestment: "$10,000",
        backgroundColor: "bg-green-100",
        textColor: "text-green-800"
    },
    {
        id: 3,
        name: "24-Month Plan",
        description: "Long-term investment with higher returns",
        interestRate: "12% per annum",
        minInvestment: "$2,000",
        maxInvestment: "$20,000",
        backgroundColor: "bg-purple-100",
        textColor: "text-purple-800"
    },
    {
        id: 4,
        name: "36-Month Plan",
        description: "Extended investment with premium returns",
        interestRate: "15% per annum",
        minInvestment: "$5,000",
        maxInvestment: "$50,000",
        backgroundColor: "bg-orange-100",
        textColor: "text-orange-800"
    }
];

const InstallmentPlanSelector = () => {
    // State to track selected plans and their selection count
    const [selectedPlans, setSelectedPlans] = useState({});
    const [selectionHistory, setSelectionHistory] = useState([]);

    // Handle plan selection
    const handlePlanSelect = (plan) => {
        // Update selection count
        const updatedSelectedPlans = {
            ...selectedPlans,
            [plan.id]: (selectedPlans[plan.id] || 0) + 1
        };
        setSelectedPlans(updatedSelectedPlans);

        // Add to selection history
        const newHistoryEntry = {
            planId: plan.id,
            planName: plan.name,
            selectedAt: new Date().toLocaleString()
        };
        setSelectionHistory([...selectionHistory, newHistoryEntry]);
    };

    // Reset selection history
    const resetSelectionHistory = () => {
        setSelectedPlans({});
        setSelectionHistory([]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Installment Plan Selector
                </h1>

                {/* Installment Plans Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {installmentPlans.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`${plan.backgroundColor} ${plan.textColor} 
                            rounded-lg shadow-lg p-6 hover:scale-105 transition-transform 
                            cursor-pointer relative`}
                            onClick={() => handlePlanSelect(plan)}
                        >
                            <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
                            <p className="mb-2">{plan.description}</p>
                            <div className="space-y-2">
                                <p>Interest Rate: {plan.interestRate}</p>
                                <p>Min Investment: {plan.minInvestment}</p>
                                <p>Max Investment: {plan.maxInvestment}</p>
                            </div>
                            {selectedPlans[plan.id] && (
                                <div className="absolute top-2 right-2 
                                    bg-white rounded-full p-1">
                                    <span className="text-sm font-bold">
                                        {selectedPlans[plan.id]}x
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Selection History */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Selection History
                        </h2>
                        <button 
                            onClick={resetSelectionHistory}
                            className="flex items-center text-red-500 hover:text-red-700"
                        >
                            <RefreshCcw className="mr-2" size={18} />
                            Reset History
                        </button>
                    </div>

                    {selectionHistory.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No plans selected yet
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-3 text-left">Plan Name</th>
                                        <th className="p-3 text-left">Selected At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectionHistory.map((entry, index) => (
                                        <tr 
                                            key={index} 
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="p-3">{entry.planName}</td>
                                            <td className="p-3">{entry.selectedAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstallmentPlanSelector;