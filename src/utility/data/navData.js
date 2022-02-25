import users from '../../images/icons/users_icon.png'
import guarantors from '../../images/icons/guarantors_icon.png'
import loans from '../../images/icons/loans_icon.png'
import decisionModels from '../../images/icons/decision_models_icon.png'
import savings from '../../images/icons/savings_icon.png'
import loanRequests from '../../images/icons/loan_request_icon.png'
import whitelist from '../../images/icons/whitelist_icon.png'
import karma from '../../images/icons/karma_icon.png'
import organization from '../../images/icons/switch_org_icon.png'
import loanProducts from '../../images/icons/loan_products_icon.png'
import savingsProducts from '../../images/icons/savings_products_icon.png'
import feesCharges from '../../images/icons/fees_charges_icon.png'
import transactions from '../../images/icons/transactions_icon.png'
import services from '../../images/icons/services_icon.png'
import serviceAccount from '../../images/icons/service_account_icon.png'
import settlements from '../../images/icons/settlements_icon.png'
import reports from '../../images/icons/reports_icon.png'
import preferences from '../../images/icons/preferences_icon.png'
import feesPricing from '../../images/icons/fees_pricing_icon.png'
import auditLogs from '../../images/icons/audit_log_icon.png'

export const navData = {
    customers: [
        { title: 'Users', icon: users },
        { title: 'Guarantors', icon: guarantors },
        { title: 'Loans', icon: loans },
        { title: 'Decision Models', icon: decisionModels },
        { title: 'Savings', icon: savings },
        { title: 'Loan Requests', icon: loanRequests },
        { title: 'Whitelist', icon: whitelist },
        { title: 'Karma', icon: karma }
    ],
    business: [
        { title: 'Organization', icon: organization },
        { title: 'Loan Products', icon: loanProducts },
        { title: 'Savings Producs', icon: savingsProducts },
        { title: 'Fees and Charges', icon: feesCharges },
        { title: 'Transactions', icon: transactions },
        { title: 'Services', icon: services },
        { title: 'Service Account', icon: serviceAccount },
        { title: 'Settlements', icon: settlements },
        { title: 'Reports', icon: reports }
    ],
    settings: [
        { title: 'Preferences', icon: preferences },
        { title: 'Fees and Pricing', icon: feesPricing },
        { title: 'Audit Logs', icon: auditLogs }
    ]
}