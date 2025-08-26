"use client";

import { Button } from "@workspace/ui/components/button";
import { useState } from "react";

export default function Page() {
    const [grossSalary, setGrossSalary] = useState<number>(0);
    const [result, setResult] = useState<{
        netSalary: number;
        tax: number;
        nationalPension: number;
        healthInsurance: number;
        employmentInsurance: number;
    } | null>(null);

    const calculateSalary = () => {
        if (grossSalary <= 0) return;

        // 간단한 한국 세금 계산 (2024년 기준 근사치)
        const taxRate =
            grossSalary > 50000000
                ? 0.35
                : grossSalary > 30000000
                  ? 0.24
                  : grossSalary > 14000000
                    ? 0.15
                    : 0.06;
        const tax = grossSalary * taxRate;

        // 4대보험 계산 (근사치)
        const nationalPension = grossSalary * 0.045; // 국민연금 4.5%
        const healthInsurance = grossSalary * 0.0354; // 건강보험 3.54%
        const employmentInsurance = grossSalary * 0.009; // 고용보험 0.9%

        const totalDeductions = tax + nationalPension + healthInsurance + employmentInsurance;
        const netSalary = grossSalary - totalDeductions;

        setResult({
            netSalary,
            tax,
            nationalPension,
            healthInsurance,
            employmentInsurance,
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">연봉 계산기</h1>

                <div className="bg-card border rounded-lg p-6 space-y-6">
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium mb-2">
                            연간 총 급여 (세전)
                        </label>
                        <input
                            id="salary"
                            type="number"
                            value={grossSalary || ""}
                            onChange={(e) => setGrossSalary(Number(e.target.value))}
                            placeholder="예: 50000000"
                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <p className="text-xs text-muted-foreground mt-1">원 단위로 입력하세요</p>
                    </div>

                    <Button onClick={calculateSalary} className="w-full">
                        계산하기
                    </Button>

                    {result && (
                        <div className="mt-6 space-y-4">
                            <h2 className="text-xl font-semibold">계산 결과</h2>

                            <div className="bg-secondary/50 rounded-lg p-4">
                                <div className="text-2xl font-bold text-primary">
                                    실수령액: {result.netSalary.toLocaleString()}원
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">
                                    월 평균: {Math.round(result.netSalary / 12).toLocaleString()}원
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium">공제 내역</h3>
                                <div className="text-sm space-y-1">
                                    <div className="flex justify-between">
                                        <span>소득세</span>
                                        <span>{result.tax.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>국민연금</span>
                                        <span>{result.nationalPension.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>건강보험</span>
                                        <span>{result.healthInsurance.toLocaleString()}원</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>고용보험</span>
                                        <span>{result.employmentInsurance.toLocaleString()}원</span>
                                    </div>
                                    <hr className="border-border" />
                                    <div className="flex justify-between font-medium">
                                        <span>총 공제액</span>
                                        <span>
                                            {(
                                                result.tax +
                                                result.nationalPension +
                                                result.healthInsurance +
                                                result.employmentInsurance
                                            ).toLocaleString()}
                                            원
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
