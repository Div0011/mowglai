"use client";

import React, { createContext, useContext, useState } from "react";

interface AuditContextType {
    isAuditOpen: boolean;
    openAudit: () => void;
    closeAudit: () => void;
    setIsAuditOpen: (open: boolean) => void;
}

const AuditContext = createContext<AuditContextType | undefined>(undefined);

export const AuditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuditOpen, setIsAuditOpen] = useState(false);

    const openAudit = () => setIsAuditOpen(true);
    const closeAudit = () => setIsAuditOpen(false);

    return (
        <AuditContext.Provider value={{ isAuditOpen, openAudit, closeAudit, setIsAuditOpen }}>
            {children}
        </AuditContext.Provider>
    );
};

export const useAudit = () => {
    const context = useContext(AuditContext);
    if (context === undefined) {
        throw new Error("useAudit must be used within an AuditProvider");
    }
    return context;
};
