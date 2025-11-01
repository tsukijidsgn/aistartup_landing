'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const responseDatabase = {
  greetings: [
    "Hello! I'm your AI assistant. I'm here to help you learn about our AI-powered platform. What would you like to know?",
    "Hi there! Welcome! I can help you understand our features, pricing, or how to get started. What interests you?",
    "Hey! Great to see you here. Our platform helps teams work faster with AI-powered analytics. What would you like to explore?"
  ],
  features: [
    "Our platform includes powerful features like: Call Analytics for real-time insights, Smart Transcripts with speaker identification, AI Summaries of your meetings, comprehensive Dashboard Insights, Smart Notifications, and Integration Hub. Which feature would you like to learn more about?",
    "We offer six main features: 1) Call Analytics - get insights from every conversation, 2) Smart Transcripts - automatic, accurate transcripts, 3) AI Summaries - instant meeting summaries, 4) Dashboard Insights - actionable metrics, 5) Smart Notifications - never miss important moments, and 6) Integration Hub - connect with your tools. Want details on any specific one?",
    "Our AI assistant provides: real-time call analytics, automated transcription, intelligent summaries, comprehensive dashboards, and seamless integrations. Teams see 40% productivity increases on average!"
  ],
  pricing: [
    "We have three plans: Starter at $29/month for individuals (100 transcriptions/month), Professional at $99/month for teams (unlimited everything, advanced analytics), and Enterprise with custom pricing for large organizations. All plans include a 14-day free trial with no credit card required!",
    "Our pricing starts at $29/month for Starter (perfect for getting started), $99/month for Professional (best for growing teams), and custom Enterprise plans for large companies. The Professional plan is our most popular - it includes unlimited transcriptions, advanced AI analytics, priority support, and API access. Which one sounds right for you?",
    "Pricing is simple: Starter ($29/mo) - 100 transcriptions, basic analytics, 5 team members. Professional ($99/mo) - unlimited everything, advanced features, priority support (most popular!). Enterprise - custom pricing with dedicated support. All include a free 14-day trial!"
  ],
  gettingStarted: [
    "Getting started is easy! Click the 'GET STARTED' button in the top right, or scroll down to our signup section. Just enter your email to start your free 14-day trial - no credit card required. You'll have full access to explore all features immediately!",
    "To get started, simply click the green 'GET STARTED' button anywhere on the page. You can sign up with just your email for a free 14-day trial. No credit card needed! Once you're in, you'll have immediate access to all features. Ready to transform your workflow?",
    "Start your free 14-day trial by clicking 'GET STARTED' - it only takes seconds! Just enter your email (no credit card required). You'll immediately have access to call analytics, transcripts, AI summaries, and all our features. Cancel anytime!"
  ],
  analytics: [
    "Our call analytics provide real-time insights from every conversation. You get visual dashboards showing conversation trends, sentiment analysis, key topics discussed, talk time distribution, and actionable metrics. It's like having an AI analyst working 24/7 to help you make data-driven decisions.",
    "Call Analytics gives you deep insights: conversation patterns, sentiment tracking, key moment identification, performance metrics, and trend analysis. Teams using our analytics report 40% productivity increases and better sales outcomes. Want to know more about how it works?",
    "Our analytics dashboard shows: real-time conversation insights, speaker analytics, sentiment analysis, keyword tracking, and comprehensive reports. Everything is powered by advanced AI to help you understand your calls better and improve outcomes."
  ],
  transcripts: [
    "Smart Transcripts automatically generate accurate, searchable transcripts from your calls. Features include speaker identification (who said what), timestamps, keyword highlighting, and export options. They're searchable, so you can quickly find any conversation or topic. Much better than taking notes manually!",
    "Our transcription service provides: automatic transcription in real-time, multi-speaker identification, accurate text with punctuation, searchable transcripts, and export to various formats. The transcripts are powered by advanced AI for maximum accuracy.",
    "Smart Transcripts convert your calls into searchable text with speaker labels. You can search for any keyword, export transcripts, and they integrate seamlessly with our analytics and summaries. It's like having a perfect note-taker for every call!"
  ],
  summaries: [
    "AI Summaries give you instant, intelligent summaries of your calls and meetings. The AI extracts key points, action items, decisions made, and important moments. You get a concise overview without reading the full transcript - saving you hours every week!",
    "Our AI Summaries automatically extract: key discussion points, action items and follow-ups, decisions made, important insights, and next steps. They're generated instantly after each call, so you always have a quick reference without scrolling through hours of transcripts.",
    "AI Summaries transform long conversations into concise overviews. The AI identifies what matters most - key decisions, action items, important points - and presents them in an easy-to-read format. Perfect for busy teams who need quick insights!"
  ],
  general: [
    "I'd be happy to help! You can ask me about our features, pricing plans, how to get started, or any specific capabilities. What would you like to know more about?",
    "That's interesting! Our platform helps teams work smarter with AI. Would you like to know about features, pricing, integrations, or how to get started?",
    "Great question! Our AI-powered platform transforms how teams handle calls and meetings. I can tell you about features, pricing, capabilities, or help you get started. What interests you most?"
  ],
  thanks: [
    "You're welcome! Feel free to ask if you have any other questions about our platform. I'm here to help!",
    "Happy to help! If you need anything else about our features, pricing, or getting started, just ask!",
    "Anytime! Don't hesitate to reach out if you want to know more about our AI platform or how it can help your team."
  ]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getAIResponse = (userMessage: string, conversationHistory: Message[]): string => {
    const lowerMessage = userMessage.toLowerCase().trim()
    
    // Helper function to check if message contains any of the keywords (more flexible matching)
    const containsKeywords = (keywords: string[]): boolean => {
      return keywords.some(keyword => {
        // Handle multi-word keywords
        if (keyword.includes(' ')) {
          return lowerMessage.includes(keyword)
        }
        // Handle single words - check as whole word or as part of word for flexibility
        const wordBoundaryRegex = new RegExp(`\\b${keyword}\\w*\\b|\\b\\w*${keyword}\\b`, 'i')
        return wordBoundaryRegex.test(lowerMessage) || lowerMessage.includes(keyword)
      })
    }
    
    // Check for greetings (with priority - exact match at start)
    if (lowerMessage.match(/^(hi|hello|hey|good (morning|afternoon|evening)|greetings?)/i)) {
      return responseDatabase.greetings[Math.floor(Math.random() * responseDatabase.greetings.length)]
    }
    
    // Check for thanks/gratitude
    if (containsKeywords(['thanks', 'thank you', 'thank', 'appreciate', 'grateful', 'ty', 'thx'])) {
      return responseDatabase.thanks[Math.floor(Math.random() * responseDatabase.thanks.length)]
    }
    
    // Check for pricing questions - expanded keywords
    if (containsKeywords([
      'price', 'pricing', 'cost', 'costs', 'costing',
      'how much', 'how many dollars', 'dollar', 'money',
      'plan', 'plans', 'planning',
      'subscription', 'subscriptions',
      'fee', 'fees',
      'billing', 'bill', 'billed',
      'payment', 'pay', 'paying', 'paid',
      'monthly', 'annual', 'yearly',
      'starter', 'professional', 'enterprise',
      'cheap', 'expensive', 'affordable'
    ])) {
      return responseDatabase.pricing[Math.floor(Math.random() * responseDatabase.pricing.length)]
    }
    
    // Check for getting started questions
    if (containsKeywords([
      'start', 'starting', 'started', 'begin', 'beginning', 'began',
      'get started', 'getting started', 'sign up', 'signup', 'sign-up',
      'register', 'registration', 'registering', 'sign', 'signing',
      'trial', 'free trial', 'trials', 'trying',
      'how to start', 'how do i', 'how can i',
      'signup', 'create account', 'new account', 'join'
    ])) {
      return responseDatabase.gettingStarted[Math.floor(Math.random() * responseDatabase.gettingStarted.length)]
    }
    
    // Check for analytics specific questions
    if (containsKeywords([
      'analytics', 'analytic', 'analyze', 'analysis',
      'insight', 'insights', 'insightful',
      'metric', 'metrics', 'measurement', 'measurements',
      'data', 'dataset', 'datasets',
      'dashboard', 'dashboards',
      'report', 'reports', 'reporting',
      'statistic', 'statistics', 'statistical',
      'track', 'tracking', 'tracked'
    ])) {
      return responseDatabase.analytics[Math.floor(Math.random() * responseDatabase.analytics.length)]
    }
    
    // Check for transcript questions
    if (containsKeywords([
      'transcript', 'transcripts', 'transcription', 'transcriptions',
      'record', 'records', 'recorded', 'recording', 'recordings',
      'speaker', 'speakers', 'who said', 'who spoke',
      'convert', 'converting', 'conversion'
    ])) {
      return responseDatabase.transcripts[Math.floor(Math.random() * responseDatabase.transcripts.length)]
    }
    
    // Check for summary questions
    if (containsKeywords([
      'summary', 'summaries', 'summarize', 'summarizing', 'summarized',
      'overview', 'overviews',
      'brief', 'briefing',
      'action item', 'action items',
      'key point', 'key points', 'takeaway', 'takeaways'
    ])) {
      return responseDatabase.summaries[Math.floor(Math.random() * responseDatabase.summaries.length)]
    }
    
    // Check for feature questions (broader match but after specific features)
    if (containsKeywords([
      'feature', 'features',
      'capability', 'capabilities',
      'what can', 'what could', 'what does', 'what do',
      'functionality', 'functions', 'function',
      'tool', 'tools',
      'offer', 'offers', 'offering',
      'provide', 'provides', 'providing',
      'include', 'includes', 'including',
      'do', 'does', 'can do', 'can you',
      'available', 'availability'
    ])) {
      return responseDatabase.features[Math.floor(Math.random() * responseDatabase.features.length)]
    }
    
    // Check for integration questions
    if (containsKeywords([
      'integrate', 'integration', 'integrations', 'integrating', 'integrated',
      'connect', 'connects', 'connection', 'connections', 'connecting', 'connected',
      'api', 'apis',
      'webhook', 'webhooks',
      'zapier', 'slack', 'salesforce', 'hubspot',
      'crm', 'crms',
      'connect with', 'works with', 'compatible'
    ])) {
      return "Our Integration Hub lets you seamlessly connect with your favorite tools! We support integrations with popular CRMs, communication platforms, and productivity tools. You can also use our API to build custom integrations. Which tools are you currently using?"
    }
    
    // Check for demo/tour requests
    if (containsKeywords([
      'demo', 'demos', 'demonstration',
      'tour', 'tours',
      'show', 'shows', 'showing', 'show me',
      'see', 'seeing', 'see it',
      'example', 'examples',
      'sample', 'samples',
      'preview', 'previews',
      'try', 'trying', 'test', 'testing'
    ])) {
      return "Great idea! You can explore our platform with a free 14-day trial - no credit card required. Just click 'GET STARTED' to sign up and you'll have immediate access to all features including call analytics, transcripts, and AI summaries. You can also check out our Features section to see detailed information about each capability!"
    }
    
    // Check for company/organization questions
    if (containsKeywords([
      'company', 'companies',
      'team', 'teams', 'teammate',
      'organization', 'organizations', 'org',
      'enterprise', 'enterprises',
      'business', 'businesses',
      'corporate',
      'workplace', 'workplaces'
    ])) {
      return "Our platform is perfect for teams and organizations of all sizes! We have plans for individuals (Starter), growing teams (Professional), and large enterprises with custom solutions. Teams typically see 40% productivity increases. How many people are on your team? I can recommend the best plan!"
    }
    
    // Check for security/privacy questions
    if (containsKeywords([
      'security', 'secure', 'securely',
      'privacy', 'private',
      'data protection', 'protect data',
      'gdpr', 'compliance', 'compliant',
      'safe', 'safety', 'safely',
      'encrypt', 'encryption', 'encrypted',
      'secure', 'securing'
    ])) {
      return "Security is a top priority! We use enterprise-grade encryption, comply with GDPR and other regulations, and offer advanced security features for Enterprise customers. All data is securely stored and processed. Want more details on our security measures?"
    }
    
    // Check for support/help questions (lower priority to avoid catching everything)
    if (lowerMessage.length < 20 && containsKeywords(['help', 'support', 'assist'])) {
      return "I'm here to help! I can answer questions about our features (call analytics, transcripts, summaries), pricing plans, how to get started, integrations, or anything else about our platform. What would you like to know?"
    }
    
    // Default intelligent response
    return responseDatabase.general[Math.floor(Math.random() * responseDatabase.general.length)]
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const userInput = inputValue
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking time (shorter for better UX)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userInput, messages),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 500 + Math.random() * 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 bg-ai-green text-black rounded-full shadow-lg shadow-ai-green/30 hover:bg-ai-green-dark hover:shadow-xl hover:shadow-ai-green/50 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-[28rem] h-[calc(100vh-6rem)] sm:h-[500px] max-h-[600px] bg-gray-900 border border-gray-800 rounded-lg shadow-2xl flex flex-col transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 pointer-events-none invisible'
        }`}
      >
        {/* Header */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 rounded-t-lg flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ai-green flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-semibold text-sm sm:text-base truncate">AI Assistant</h3>
              <p className="text-xs text-gray-400">Usually replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2"
            aria-label="Close chatbot"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-900/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-2 sm:px-4 sm:py-2 ${
                  message.isUser
                    ? 'bg-ai-green text-black'
                    : 'bg-gray-800 text-white'
                }`}
              >
                <p className="text-xs sm:text-sm leading-relaxed break-words">{message.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-white rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 sm:p-4 border-t border-gray-800 bg-gray-900 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-ai-green focus:ring-2 focus:ring-ai-green/20 transition-all text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-ai-green text-black rounded-lg font-medium hover:bg-ai-green-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

