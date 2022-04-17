import TelegramBot from 'node-telegram-bot-api'
import { botToken } from '../config'

export const bot = new TelegramBot(botToken)