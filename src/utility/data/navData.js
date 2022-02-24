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
        { title: 'users', icon: users },
        { title: 'guarantors', icon: guarantors },
        { title: 'loans', icon: loans },
        { title: 'decision models', icon: decisionModels },
        { title: 'savings', icon: savings },
        { title: 'loan requests', icon: loanRequests },
        { title: 'whitelist', icon: whitelist },
        { title: 'karma', icon: karma }
    ],
    businesses: [
        { title: 'organization', icon: organization },
        { title: 'loan products', icon: loanProducts },
        { title: 'savings producs', icon: savingsProducts },
        { title: 'fees and charges', icon: feesCharges },
        { title: 'transactions', icon: transactions },
        { title: 'services', icon: services },
        { title: 'service account', icon: serviceAccount },
        { title: 'settlements', icon: settlements },
        { title: 'reports', icon: reports }
    ],
    settings: [
        { title: 'preferences', icon: preferences },
        { title: 'fees and pricing', icon: feesPricing },
        { title: 'audit logs', icon: auditLogs }
    ]
}