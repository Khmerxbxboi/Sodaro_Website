function showPopup() {
  alert("This is your JavaScript popup triggered by the button!");
}

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { name: "1D", value: 500 },
  { name: "1W", value: 550 },
  { name: "1M", value: 600 },
  { name: "YTD", value: 580 }
];

export default function StockDashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-blue-100 min-h-screen">
      {/* Industry Overview */}
      <Card className="col-span-1">
        <CardContent className="p-4">Industry / Healthcare Plan</CardContent>
      </Card>
      
      {/* Stock Cards */}
      <Card className="col-span-1 flex flex-col items-center justify-center">
        <CardContent>
          <div className="text-xl font-bold">Cigna Group</div>
          <div className="text-red-500 text-2xl">$274.80</div>
          <Button className="mt-2">View Stock</Button>
        </CardContent>
      </Card>
      <Card className="col-span-1 flex flex-col items-center justify-center">
        <CardContent>
          <div className="text-xl font-bold">UnitedHealth Group</div>
          <div className="text-red-500 text-2xl">$488.91</div>
        </CardContent>
      </Card>
      
      {/* Stock Chart */}
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-lg font-bold">NYSE: UNH</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      {/* News Section */}
      <Card className="col-span-3">
        <CardContent>
          <h2 className="text-lg font-bold">News</h2>
          <p>Latest headlines about UnitedHealth and the healthcare industry...</p>
        </CardContent>
      </Card>
    </div>
  );
}
