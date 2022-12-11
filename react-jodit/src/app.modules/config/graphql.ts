import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { graphqlFetcher } from './graphqlFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: number;
  Upload: any;
};

export type Ad = {
  __typename?: 'Ad';
  campaignID?: Maybe<Scalars['ID']>;
  campaignLandingURL?: Maybe<Scalars['String']>;
  defaultImageURL?: Maybe<Scalars['String']>;
  defaultLandingURL?: Maybe<Scalars['String']>;
  imageURL?: Maybe<Scalars['String']>;
  isPlacementActive?: Maybe<Scalars['Boolean']>;
  placementHeight: Scalars['Int'];
  placementID: Scalars['ID'];
  placementWidth: Scalars['Int'];
};

export type AddBookmarkPayload = {
  __typename?: 'AddBookmarkPayload';
  bookmarkable?: Maybe<Bookmarkable>;
  /** @deprecated Use `bookmarkable`. */
  menu?: Maybe<Menu>;
};

export type Attachment = {
  __typename?: 'Attachment';
  comment?: Maybe<Comment>;
  id: Scalars['ID'];
  name: Scalars['String'];
  post?: Maybe<Post>;
  size: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type AttachmentCompleteUploadPayload = {
  __typename?: 'AttachmentCompleteUploadPayload';
  attachment?: Maybe<Attachment>;
};

export type AttachmentDeletePayload = {
  __typename?: 'AttachmentDeletePayload';
  attachment?: Maybe<Attachment>;
};

export type AttachmentPrepareUploadPayload = {
  __typename?: 'AttachmentPrepareUploadPayload';
  attachment: Attachment;
  signedURL: Scalars['String'];
};

export type BanLog = {
  __typename?: 'BanLog';
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  startAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type BanLogConnection = {
  __typename?: 'BanLogConnection';
  nodes?: Maybe<Array<BanLog>>;
  totalCount: Scalars['Int'];
};

export type BanLogInput = {
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['Date']>;
  startAt?: InputMaybe<Scalars['Date']>;
  userID: Scalars['ID'];
};

export type BanLogsFilter = {
  nickname?: InputMaybe<Scalars['String']>;
  userID?: InputMaybe<Scalars['ID']>;
};

export type BanLogsOrder = {
  direction: OrderDirection;
  field: BanLogsOrderField;
};

export enum BanLogsOrderField {
  CREATED_AT = 'CREATED_AT',
  END_AT = 'END_AT',
  ID = 'ID',
  START_AT = 'START_AT'
}

export type BestPostListInput = {
  endDate?: InputMaybe<Scalars['String']>;
  minimumCommentCount?: InputMaybe<Scalars['Int']>;
  minimumLikeCount?: InputMaybe<Scalars['Int']>;
  minimumViewCount?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  pagination?: InputMaybe<Pagination>;
  startDate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BestPostListType>;
};

export type BestPostListPayload = {
  __typename?: 'BestPostListPayload';
  bestPosts?: Maybe<Array<Post>>;
};

export enum BestPostListType {
  LAST_MONTH = 'LAST_MONTH',
  LAST_WEEK = 'LAST_WEEK',
  RECENT = 'RECENT',
  REPLY_COUNT = 'REPLY_COUNT',
  VOTE_COUNT = 'VOTE_COUNT'
}

export type Board = {
  __typename?: 'Board';
  hasPermission?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  menu?: Maybe<Menu>;
  module?: Maybe<BoardType>;
  notices: Array<Post>;
  posts?: Maybe<PostConnection>;
  slug: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type BoardhasPermissionArgs = {
  type?: InputMaybe<PermissionType>;
};


export type BoardpostsArgs = {
  filterBy?: InputMaybe<PostFiltersInput>;
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
};

export type BoardConnection = {
  __typename?: 'BoardConnection';
  nodes: Array<Board>;
  totalCount: Scalars['Int'];
};

export type BoardFiltersInput = {
  permissionType?: InputMaybe<PermissionType>;
  q?: InputMaybe<Scalars['String']>;
};

export type BoardNavigation = {
  __typename?: 'BoardNavigation';
  board?: Maybe<Board>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type BoardNavigationConnection = {
  __typename?: 'BoardNavigationConnection';
  nodes: Array<BoardNavigation>;
  totalCount: Scalars['Int'];
};

export type BoardNavigationFiltersInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type BoardNavigationUpdateInput = {
  board: BoardUpdateInput;
};

export type BoardNavigationUpdatePayload = {
  __typename?: 'BoardNavigationUpdatePayload';
  boardNavigation?: Maybe<BoardNavigation>;
};

export enum BoardTab {
  BEST = 'BEST',
  COMMUNITY = 'COMMUNITY',
  NOTICE = 'NOTICE'
}

export enum BoardType {
  BOARD = 'BOARD',
  PAGE = 'PAGE'
}

export type BoardUpdateInput = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type BookmarkOrder = {
  direction: OrderDirection;
  field: BookmarkOrderField;
};

export enum BookmarkOrderField {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID'
}

export type Bookmarkable = {
  id: Scalars['ID'];
  viewerHasBookmarked: Scalars['Boolean'];
};

export type BookmarkableConnection = {
  __typename?: 'BookmarkableConnection';
  nodes: Array<Bookmarkable>;
  totalCount: Scalars['Int'];
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type CollectionRequirement = {
  __typename?: 'CollectionRequirement';
  comment: Scalars['Int'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  like: Scalars['Int'];
  scrap: Scalars['Int'];
  slug: Scalars['String'];
  view: Scalars['Int'];
};

export type CollectionRequirementUpdateInput = {
  comment?: InputMaybe<Scalars['Int']>;
  like?: InputMaybe<Scalars['Int']>;
  scrap?: InputMaybe<Scalars['Int']>;
  view?: InputMaybe<Scalars['Int']>;
};

export type CollectionRequirementUpdatePayload = {
  __typename?: 'CollectionRequirementUpdatePayload';
  collectionRequirement?: Maybe<CollectionRequirement>;
};

export type Comment = {
  __typename?: 'Comment';
  /** 운영자가 신고된 댓글을 가장 최근에 확인한 날짜 */
  adminReportReadAt?: Maybe<Scalars['Date']>;
  attachments: Array<Attachment>;
  author?: Maybe<User>;
  board?: Maybe<Board>;
  boardID?: Maybe<Scalars['Int']>;
  childComment: Array<Comment>;
  childCommentCount: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  contentText?: Maybe<Scalars['String']>;
  /** @deprecated Use `originContentText`. */
  contentTextForAdmin?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  dislikes: Scalars['Int'];
  /** @deprecated Use `contentText`. */
  excerpt?: Maybe<Scalars['String']>;
  /** 운영자가 읽지 않은 신고 존재 여부 */
  hasUnreadReport?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  ipaddress?: Maybe<Scalars['String']>;
  isAnonymous: Scalars['Boolean'];
  isAuthor: Scalars['Boolean'];
  isChild: Scalars['Boolean'];
  isPostAuthor: Scalars['Boolean'];
  isSecret: Scalars['Boolean'];
  /** 가장 최근에 신고된 날짜 */
  lastReportedAt?: Maybe<Scalars['Date']>;
  likes: Scalars['Int'];
  myRating?: Maybe<RatingType>;
  nickname: Scalars['String'];
  originContentText?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  postID: Scalars['Int'];
  /** 신고 수 */
  reportCount?: Maybe<Scalars['Int']>;
  /** 사유별 신고 수 */
  reportCountByDescription?: Maybe<Array<CommetAbuseReportLogCountByDescription>>;
  /** 최근 신고사유, 운영자만 조회 가능함 */
  reportDescription?: Maybe<Scalars['String']>;
  /** 신고 로그 */
  reportLogs?: Maybe<CommentAbuseReportLogConnection>;
  updatedAt: Scalars['Date'];
  userID?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  viewerHasMuteAuthor: Scalars['Boolean'];
};


export type CommentcontentTextArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};


export type CommentexcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};


export type CommentreportLogsArgs = {
  filterBy?: InputMaybe<CommentAbuseReportLogFilters>;
  orderBy?: InputMaybe<CommentAbuseReportLogOrder>;
  pagination?: InputMaybe<Pagination>;
};

export type CommentAbuseReportLog = {
  __typename?: 'CommentAbuseReportLog';
  /** 운영자가 확인한 시간 */
  adminReadAt?: Maybe<Scalars['Date']>;
  comment?: Maybe<Comment>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ipaddress?: Maybe<Scalars['String']>;
  /** 신고한 회원 */
  reporter?: Maybe<User>;
};

export type CommentAbuseReportLogBulkUpdatePayload = {
  __typename?: 'CommentAbuseReportLogBulkUpdatePayload';
  updatedCommentAbuseReportLogs: Scalars['Int'];
};

export type CommentAbuseReportLogConnection = {
  __typename?: 'CommentAbuseReportLogConnection';
  nodes?: Maybe<Array<CommentAbuseReportLog>>;
  totalCount: Scalars['Int'];
};

export type CommentAbuseReportLogFilters = {
  commentID?: InputMaybe<Scalars['ID']>;
};

export type CommentAbuseReportLogOrder = {
  direction: OrderDirection;
  field: CommentAbuseReportLogOrderField;
};

export enum CommentAbuseReportLogOrderField {
  ADMIN_READ_AT = 'ADMIN_READ_AT',
  CREATED_AT = 'CREATED_AT',
  ID = 'ID'
}

export type CommentAbuseReportLogUpdatePayload = {
  __typename?: 'CommentAbuseReportLogUpdatePayload';
  commentAbuseReportLog?: Maybe<CommentAbuseReportLog>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  nodes: Array<Comment>;
  totalCount: Scalars['Int'];
};

export type CommentCreatePayload = {
  __typename?: 'CommentCreatePayload';
  comment?: Maybe<Comment>;
  parentComment?: Maybe<Comment>;
  post?: Maybe<Post>;
};

export type CommentDeletePayload = {
  __typename?: 'CommentDeletePayload';
  deletedCommentID?: Maybe<Scalars['String']>;
  parentComment?: Maybe<Comment>;
  post?: Maybe<Post>;
};

export type CommentDislikePayload = {
  __typename?: 'CommentDislikePayload';
  comment?: Maybe<Comment>;
};

export type CommentFiltersInput = {
  hasChildren?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  parentID?: InputMaybe<Scalars['ID']>;
  userID?: InputMaybe<Scalars['ID']>;
};

export type CommentInput = {
  attachmentIDs?: InputMaybe<Array<Scalars['ID']>>;
  content: Scalars['String'];
  contentText?: InputMaybe<Scalars['String']>;
  isSecret?: InputMaybe<Scalars['Boolean']>;
};

export type CommentLikePayload = {
  __typename?: 'CommentLikePayload';
  comment?: Maybe<Comment>;
};

export type CommentOrder = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<CommentOrderField>;
};

export enum CommentOrderField {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID',
  LIKES = 'LIKES'
}

export type CommentRatePayload = {
  __typename?: 'CommentRatePayload';
  comment?: Maybe<Comment>;
};

export type CommentRemoveLikePayload = {
  __typename?: 'CommentRemoveLikePayload';
  comment?: Maybe<Comment>;
};

export type CommentReportConnection = {
  __typename?: 'CommentReportConnection';
  nodes?: Maybe<Array<Comment>>;
  totalCount: Scalars['Int'];
};

export type CommentReportFilters = {
  /** 내용 */
  contentText?: InputMaybe<Scalars['String']>;
  /** 신고날짜 종료일 */
  endDate?: InputMaybe<Scalars['Date']>;
  /** 링커리어 사이트에 등록된 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 안읽은 신고 내역 있는지 여부 */
  reportReadStatus?: InputMaybe<ReportReadStatus>;
  /** 신고날짜 시작일 */
  startDate?: InputMaybe<Scalars['Date']>;
  /** 회원 아이디 */
  userID?: InputMaybe<Scalars['ID']>;
};

export type CommentReportOrder = {
  direction: OrderDirection;
  field: CommentReportOrderField;
};

export enum CommentReportOrderField {
  DELETED_AT = 'DELETED_AT',
  ID = 'ID',
  LAST_REPORTED_AT = 'LAST_REPORTED_AT',
  REPORT_COUNT = 'REPORT_COUNT'
}

export type CommentTrashFilters = {
  /** 내용 */
  contentText?: InputMaybe<Scalars['String']>;
  /** 신고날짜 종료일 */
  endDate?: InputMaybe<Scalars['Date']>;
  /** 링커리어 사이트에 등록된 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 신고날짜 시작일 */
  startDate?: InputMaybe<Scalars['Date']>;
  /** 회원 아이디 */
  userID?: InputMaybe<Scalars['ID']>;
};

export type CommentTrashOrder = {
  direction: OrderDirection;
  field: CommentTrashOrderField;
};

export enum CommentTrashOrderField {
  DELETED_AT = 'DELETED_AT',
  ID = 'ID',
  LAST_REPORTED_AT = 'LAST_REPORTED_AT'
}

export type CommentUpdateInput = {
  attachmentIDs?: InputMaybe<Array<Scalars['ID']>>;
  content: Scalars['String'];
};

export type CommentUpdatePayload = {
  __typename?: 'CommentUpdatePayload';
  comment?: Maybe<Comment>;
};

export type CommetAbuseReportLogCountByDescription = {
  __typename?: 'CommetAbuseReportLogCountByDescription';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type Config = {
  __typename?: 'Config';
  defaultValue?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ConfigInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type CurrentUserScrapConnection = {
  __typename?: 'CurrentUserScrapConnection';
  nodes: Array<UserScrap>;
  totalCount: Scalars['Int'];
};

export type CurrentUserScrapCreatePayload = {
  __typename?: 'CurrentUserScrapCreatePayload';
  userScrap?: Maybe<UserScrap>;
};

export type CurrentUserScrapDeletePayload = {
  __typename?: 'CurrentUserScrapDeletePayload';
  userScrap?: Maybe<UserScrap>;
};

export type CurrentUserScrapsDeleteAllPayload = {
  __typename?: 'CurrentUserScrapsDeleteAllPayload';
  userScrap: Array<UserScrap>;
};

export type CurrentUserScrapsFilter = {
  postID?: InputMaybe<Scalars['ID']>;
  q?: InputMaybe<Scalars['String']>;
};

export type DailyCommentByUserConnection = {
  __typename?: 'DailyCommentByUserConnection';
  nodes?: Maybe<Array<Comment>>;
  totalCount: Scalars['Int'];
};

export type DailyCommentByUserFilters = {
  dateAt?: InputMaybe<Scalars['String']>;
};

export type DailyCommentByUserOrder = {
  direction: OrderDirection;
  field: DailyCommentByUserOrderField;
};

export enum DailyCommentByUserOrderField {
  ID = 'ID'
}

export type DailyPostByUserConnection = {
  __typename?: 'DailyPostByUserConnection';
  nodes?: Maybe<Array<Post>>;
  totalCount: Scalars['Int'];
};

export type DailyPostByUserFilters = {
  dateAt?: InputMaybe<Scalars['String']>;
};

export type DailyPostByUserOrder = {
  direction: OrderDirection;
  field: DailyPostByUserOrderField;
};

export enum DailyPostByUserOrderField {
  ID = 'ID'
}

export type Menu = Bookmarkable & {
  __typename?: 'Menu';
  board?: Maybe<Board>;
  bookmarkable: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  groupIDList?: Maybe<Scalars['String']>;
  groupIDs: Array<Scalars['ID']>;
  hasNewPost: Scalars['Boolean'];
  id: Scalars['ID'];
  isShortcut: Scalars['Boolean'];
  menuType?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  parentID?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subMenus: Array<Menu>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  viewerHasBookmarked: Scalars['Boolean'];
};

export type MenuOrder = {
  direction: OrderDirection;
  field: MenuOrderField;
};

export enum MenuOrderField {
  ORDER = 'ORDER'
}

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  excerpt?: Maybe<Scalars['String']>;
  hasRead: Scalars['Boolean'];
  id: Scalars['ID'];
  isReplied?: Maybe<Scalars['Boolean']>;
  linkURL?: Maybe<Scalars['String']>;
  notificationType?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  readAt?: Maybe<Scalars['Date']>;
  receivedMessageID: Scalars['Int'];
  receiver?: Maybe<User>;
  receiverID: Scalars['Int'];
  sender?: Maybe<User>;
  senderID: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};


export type MessageexcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  nodes?: Maybe<Array<Message>>;
  totalCount: Scalars['Int'];
};

export type MessageCreateInput = {
  content: Scalars['String'];
  isReplied: Scalars['Boolean'];
  receiverID: Scalars['Int'];
};

export type MessageCreatePayload = {
  __typename?: 'MessageCreatePayload';
  message?: Maybe<Message>;
};

export type MessageDeleteAllPayload = {
  __typename?: 'MessageDeleteAllPayload';
  count?: Maybe<Scalars['Int']>;
};

export type MessageDeletePayload = {
  __typename?: 'MessageDeletePayload';
  message?: Maybe<Message>;
};

export type MessageFiltersInput = {
  type: Scalars['String'];
};

export type MessageOrder = {
  direction: OrderDirection;
  field: MessageOrderField;
};

export enum MessageOrderField {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID'
}

export type MessageStorePayload = {
  __typename?: 'MessageStorePayload';
  message?: Maybe<Message>;
};

export type MessageUpdatePayload = {
  __typename?: 'MessageUpdatePayload';
  message?: Maybe<Message>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBookmark?: Maybe<AddBookmarkPayload>;
  attachmentCompleteUpload?: Maybe<AttachmentCompleteUploadPayload>;
  attachmentDelete?: Maybe<AttachmentDeletePayload>;
  attachmentPrepareUpload?: Maybe<AttachmentPrepareUploadPayload>;
  banUser?: Maybe<BanLog>;
  boardNavigationUpdate?: Maybe<BoardNavigationUpdatePayload>;
  commentAbuseReport?: Maybe<Scalars['Boolean']>;
  commentCreate?: Maybe<CommentCreatePayload>;
  commentDelete?: Maybe<CommentDeletePayload>;
  commentDislike?: Maybe<CommentDislikePayload>;
  commentLike?: Maybe<CommentLikePayload>;
  commentRate?: Maybe<CommentRatePayload>;
  commentRemoveLike?: Maybe<CommentRemoveLikePayload>;
  commentUpdate?: Maybe<CommentUpdatePayload>;
  configReset?: Maybe<Scalars['Boolean']>;
  configUpdate?: Maybe<Config>;
  currentUserScrapCreate?: Maybe<CurrentUserScrapCreatePayload>;
  currentUserScrapDelete?: Maybe<CurrentUserScrapDeletePayload>;
  currentUserScrapsDeleteAll?: Maybe<CurrentUserScrapsDeleteAllPayload>;
  issueSignedURL?: Maybe<Scalars['String']>;
  logout?: Maybe<Scalars['Boolean']>;
  messageCreate?: Maybe<MessageCreatePayload>;
  messageDelete?: Maybe<MessageDeletePayload>;
  messageDeleteAll?: Maybe<MessageDeleteAllPayload>;
  messageStore?: Maybe<MessageStorePayload>;
  messageUpdate?: Maybe<MessageUpdatePayload>;
  muteUser?: Maybe<User>;
  notificationCreate?: Maybe<NotificationCreatePayload>;
  notificationDelete?: Maybe<NotificationDeletePayload>;
  notificationDeleteAll?: Maybe<NotificationDeleteAllPayload>;
  notificationUpdate?: Maybe<NotificationUpdatePayload>;
  postAbuseReport?: Maybe<Scalars['Boolean']>;
  postCollectionCreate?: Maybe<PostCollectionCreatePayload>;
  postCollectionDelete?: Maybe<PostCollectionDeletePayload>;
  postCollectionRebuild?: Maybe<PostCollectionRebuildPayload>;
  postCollectionUpdate?: Maybe<PostCollectionUpdatePayload>;
  postCreate?: Maybe<PostCreatePayload>;
  postDelete?: Maybe<PostDeletePayload>;
  postDeleteMany?: Maybe<PostDeleteManyPayload>;
  postDislike?: Maybe<PostDislikePayload>;
  postLike?: Maybe<PostLikePayload>;
  postRate?: Maybe<PostRatePayload>;
  postRead?: Maybe<PostReadPayload>;
  postRemoveLike?: Maybe<PostRemoveLikePayload>;
  postUpdate?: Maybe<PostUpdatePayload>;
  postUpdateMany?: Maybe<PostUpdateManyPayload>;
  postsUpdate?: Maybe<PostsUpdatePayload>;
  /** 운영자가 댓글 전체 신고내역을 확인 */
  readAllCommentAbuseReportLog?: Maybe<CommentAbuseReportLogBulkUpdatePayload>;
  /** 운영자가 게시글 전체 신고내역을 확인 */
  readAllPostAbuseReportLog?: Maybe<PostAbuseReportLogBulkUpdatePayload>;
  /** 운영자가 댓글 신고내역을 확인 */
  readCommentAbuseReportLog?: Maybe<CommentAbuseReportLogUpdatePayload>;
  /** 운영자가 게시글 신고내역을 확인 */
  readPostAbuseReportLog?: Maybe<PostAbuseReportLogUpdatePayload>;
  removeBookmark?: Maybe<RemoveBookmarkPayload>;
  /** 댓글을 신고 */
  reportComment?: Maybe<ReportCommentPayload>;
  /** 게시물을 신고 */
  reportPost?: Maybe<ReportPostPayload>;
  restorePost?: Maybe<RestorePostPayload>;
  tagCreate?: Maybe<TagCreatePayload>;
  tagDelete?: Maybe<TagDeletePayload>;
  tagDeleteMany?: Maybe<TagDeleteManyPayload>;
  tagUpdate?: Maybe<TagUpdatePayload>;
  trashCreate?: Maybe<TrashCreatePayload>;
  unbanUsers?: Maybe<UnbanLogsPayLoad>;
  unmuteUser?: Maybe<User>;
  updateBestOfBestRequirement?: Maybe<CollectionRequirementUpdatePayload>;
  updateBestPostRequirement?: Maybe<CollectionRequirementUpdatePayload>;
};


export type MutationaddBookmarkArgs = {
  id?: InputMaybe<Scalars['ID']>;
  menuID?: InputMaybe<Scalars['ID']>;
};


export type MutationattachmentCompleteUploadArgs = {
  attachmentID: Scalars['ID'];
};


export type MutationattachmentDeleteArgs = {
  attachmentID: Scalars['ID'];
};


export type MutationattachmentPrepareUploadArgs = {
  commentID?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  postID?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};


export type MutationbanUserArgs = {
  input: BanLogInput;
};


export type MutationboardNavigationUpdateArgs = {
  id: Scalars['ID'];
  input: BoardNavigationUpdateInput;
};


export type MutationcommentAbuseReportArgs = {
  id: Scalars['ID'];
};


export type MutationcommentCreateArgs = {
  input: CommentInput;
  parentID?: InputMaybe<Scalars['ID']>;
  postID: Scalars['ID'];
};


export type MutationcommentDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationcommentDislikeArgs = {
  id: Scalars['ID'];
};


export type MutationcommentLikeArgs = {
  id: Scalars['ID'];
};


export type MutationcommentRateArgs = {
  id: Scalars['ID'];
  rating: RatingType;
};


export type MutationcommentRemoveLikeArgs = {
  id: Scalars['ID'];
};


export type MutationcommentUpdateArgs = {
  id: Scalars['ID'];
  input: CommentInput;
};


export type MutationconfigResetArgs = {
  id: Scalars['ID'];
};


export type MutationconfigUpdateArgs = {
  id: Scalars['ID'];
  input: ConfigInput;
};


export type MutationcurrentUserScrapCreateArgs = {
  postID: Scalars['ID'];
};


export type MutationcurrentUserScrapDeleteArgs = {
  postID: Scalars['ID'];
};


export type MutationissueSignedURLArgs = {
  contentType?: InputMaybe<Scalars['String']>;
};


export type MutationmessageCreateArgs = {
  input: MessageCreateInput;
};


export type MutationmessageDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationmessageDeleteAllArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationmessageStoreArgs = {
  id: Scalars['ID'];
};


export type MutationmessageUpdateArgs = {
  id: Scalars['ID'];
};


export type MutationmuteUserArgs = {
  mutedUserID: Scalars['ID'];
};


export type MutationnotificationCreateArgs = {
  input: NotificationCreateInput;
};


export type MutationnotificationDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationnotificationUpdateArgs = {
  hasRead: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationpostAbuseReportArgs = {
  id: Scalars['ID'];
};


export type MutationpostCollectionCreateArgs = {
  input: PostCollectionInput;
};


export type MutationpostCollectionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationpostCollectionRebuildArgs = {
  automation?: InputMaybe<PostCollectionAutomationInput>;
  id: Scalars['ID'];
};


export type MutationpostCollectionUpdateArgs = {
  id: Scalars['ID'];
  input: PostCollectionInput;
};


export type MutationpostCreateArgs = {
  input: PostInput;
};


export type MutationpostDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationpostDeleteManyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationpostDislikeArgs = {
  id: Scalars['ID'];
};


export type MutationpostLikeArgs = {
  id: Scalars['ID'];
};


export type MutationpostRateArgs = {
  id: Scalars['ID'];
  rating: RatingType;
};


export type MutationpostReadArgs = {
  id: Scalars['ID'];
};


export type MutationpostRemoveLikeArgs = {
  id: Scalars['ID'];
};


export type MutationpostUpdateArgs = {
  id: Scalars['ID'];
  input: PostUpdateInput;
};


export type MutationpostUpdateManyArgs = {
  ids: Array<Scalars['ID']>;
  input: PostUpdateManyInput;
};


export type MutationpostsUpdateArgs = {
  boardID: Scalars['ID'];
  input: PostsUpdateInput;
};


export type MutationreadAllCommentAbuseReportLogArgs = {
  commentID: Scalars['ID'];
};


export type MutationreadAllPostAbuseReportLogArgs = {
  postID: Scalars['ID'];
};


export type MutationreadCommentAbuseReportLogArgs = {
  id: Scalars['ID'];
};


export type MutationreadPostAbuseReportLogArgs = {
  id: Scalars['ID'];
};


export type MutationremoveBookmarkArgs = {
  id?: InputMaybe<Scalars['ID']>;
  menuID?: InputMaybe<Scalars['ID']>;
};


export type MutationreportCommentArgs = {
  input: ReportCommentInput;
};


export type MutationreportPostArgs = {
  input: ReportPostInput;
};


export type MutationrestorePostArgs = {
  id: Scalars['ID'];
};


export type MutationtagCreateArgs = {
  input: TagInput;
};


export type MutationtagDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationtagDeleteManyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationtagUpdateArgs = {
  id: Scalars['ID'];
  input: TagInput;
};


export type MutationtrashCreateArgs = {
  input?: InputMaybe<TrashInput>;
};


export type MutationunbanUsersArgs = {
  logIDs: Array<Scalars['ID']>;
};


export type MutationunmuteUserArgs = {
  mutedUserID: Scalars['ID'];
};


export type MutationupdateBestOfBestRequirementArgs = {
  input: CollectionRequirementUpdateInput;
};


export type MutationupdateBestPostRequirementArgs = {
  input: CollectionRequirementUpdateInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  hasRead: Scalars['Boolean'];
  id: Scalars['ID'];
  linkURL: Scalars['String'];
  receiverID?: Maybe<Scalars['Int']>;
  senderID?: Maybe<Scalars['Int']>;
  senderNickname?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  notifications?: Maybe<Array<Maybe<Notification>>>;
};

export type NotificationCreateInput = {
  content: Scalars['String'];
  linkURL: Scalars['String'];
  notificationType: Scalars['String'];
  receiverID: Scalars['Int'];
};

export type NotificationCreatePayload = {
  __typename?: 'NotificationCreatePayload';
  notification?: Maybe<Message>;
};

export type NotificationDeleteAllPayload = {
  __typename?: 'NotificationDeleteAllPayload';
  count?: Maybe<Scalars['Int']>;
};

export type NotificationDeletePayload = {
  __typename?: 'NotificationDeletePayload';
  notification?: Maybe<Message>;
};

export type NotificationUpdatePayload = {
  __typename?: 'NotificationUpdatePayload';
  notification?: Maybe<Message>;
};

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Pagination = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export enum PermissionType {
  ACCESS = 'ACCESS',
  CONSULTATION_READ = 'CONSULTATION_READ',
  LIST = 'LIST',
  MANAGER = 'MANAGER',
  VIEW = 'VIEW',
  WRITE_COMMENT = 'WRITE_COMMENT',
  WRITE_DOCUMENT = 'WRITE_DOCUMENT'
}

export type Post = {
  __typename?: 'Post';
  /** 운영자가 신고 내역을 전부 읽은 날짜 */
  adminReportReadAt?: Maybe<Scalars['Date']>;
  allowTrackback?: Maybe<Scalars['Boolean']>;
  attachments: Array<Attachment>;
  author?: Maybe<User>;
  board?: Maybe<Board>;
  commentCount: Scalars['Int'];
  commentStatus?: Maybe<PostCommentStatus>;
  comments: CommentConnection;
  containsImage: Scalars['Boolean'];
  containsYoutube: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
  contentText?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
  dislikes: Scalars['Int'];
  /** @deprecated Use `contentText`. */
  excerpt?: Maybe<Scalars['String']>;
  globalNotice?: Maybe<Scalars['Boolean']>;
  /** 운영자가 읽지 않은 신고 존재 여부 */
  hasUnreadReport?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  imageSrc?: Maybe<Scalars['String']>;
  ipaddress?: Maybe<Scalars['String']>;
  isAnonymous: Scalars['Boolean'];
  isAuthor?: Maybe<Scalars['Boolean']>;
  isNotice?: Maybe<Scalars['Boolean']>;
  isScrapped: Scalars['Boolean'];
  /** 가장 최근에 신고된 날짜 */
  lastReportedAt?: Maybe<Scalars['Date']>;
  likes: Scalars['Int'];
  myRating?: Maybe<RatingType>;
  nextPostID?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  notifyMessage?: Maybe<Scalars['Boolean']>;
  originContentText?: Maybe<Scalars['String']>;
  postCollections: Array<PostCollection>;
  prevPostID?: Maybe<Scalars['ID']>;
  /** 신고 수 */
  reportCount?: Maybe<Scalars['Int']>;
  /** 사유별 신고 수 */
  reportCountByDescription?: Maybe<Array<PostAbuseReportLogCountByDescription>>;
  /** 최근 신고사유, 운영자만 조회 가능함 */
  reportDescription?: Maybe<Scalars['String']>;
  /** 신고 로그 */
  reportLogs?: Maybe<PostAbuseReportLogConnection>;
  score: Scalars['Int'];
  scrapCount: Scalars['Int'];
  status?: Maybe<PostStatus>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  viewerHasMuteAuthor: Scalars['Boolean'];
  views: Scalars['Int'];
  youtubeSrc?: Maybe<Scalars['String']>;
};


export type PostcommentsArgs = {
  orderBy?: InputMaybe<CommentOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type PostcontentTextArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};


export type PostexcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
};


export type PostnextPostIDArgs = {
  postCursorType?: InputMaybe<PostCursorType>;
};


export type PostprevPostIDArgs = {
  postCursorType?: InputMaybe<PostCursorType>;
};


export type PostreportLogsArgs = {
  orderBy?: InputMaybe<PostAbuseReportLogOrder>;
  pagination?: InputMaybe<Pagination>;
};

export type PostAbuseReportLog = {
  __typename?: 'PostAbuseReportLog';
  /** 운영자가 확인한 시간 */
  adminReadAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ipaddress?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  /** 신고한 회원 */
  reporter?: Maybe<User>;
};

export type PostAbuseReportLogBulkUpdatePayload = {
  __typename?: 'PostAbuseReportLogBulkUpdatePayload';
  updatedPostAbuseReportLogs: Scalars['Int'];
};

export type PostAbuseReportLogConnection = {
  __typename?: 'PostAbuseReportLogConnection';
  nodes?: Maybe<Array<PostAbuseReportLog>>;
  totalCount: Scalars['Int'];
};

export type PostAbuseReportLogCountByDescription = {
  __typename?: 'PostAbuseReportLogCountByDescription';
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type PostAbuseReportLogFilters = {
  postID?: InputMaybe<Scalars['ID']>;
};

export type PostAbuseReportLogOrder = {
  direction: OrderDirection;
  field: PostAbuseReportLogOrderField;
};

export enum PostAbuseReportLogOrderField {
  ADMIN_READ_AT = 'ADMIN_READ_AT',
  CREATED_AT = 'CREATED_AT',
  ID = 'ID'
}

export type PostAbuseReportLogUpdatePayload = {
  __typename?: 'PostAbuseReportLogUpdatePayload';
  postAbuseReportLog?: Maybe<PostAbuseReportLog>;
};

export type PostCollection = {
  __typename?: 'PostCollection';
  automation?: Maybe<PostCollectionAutomation>;
  id: Scalars['ID'];
  posts: Array<Post>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};


export type PostCollectionpostsArgs = {
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
};

export type PostCollectionAutomation = {
  __typename?: 'PostCollectionAutomation';
  boards: Array<Board>;
  enabled: Scalars['Boolean'];
  filters?: Maybe<PostFilters>;
};

export type PostCollectionAutomationInput = {
  boardIDs?: InputMaybe<Array<Scalars['ID']>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  filters?: InputMaybe<PostFiltersInput>;
};

export type PostCollectionConnection = {
  __typename?: 'PostCollectionConnection';
  nodes?: Maybe<Array<Maybe<PostCollection>>>;
  totalCount: Scalars['Int'];
};

export type PostCollectionCreatePayload = {
  __typename?: 'PostCollectionCreatePayload';
  postCollection?: Maybe<PostCollection>;
};

export type PostCollectionDeletePayload = {
  __typename?: 'PostCollectionDeletePayload';
  postCollection?: Maybe<PostCollection>;
};

export type PostCollectionFiltersInput = {
  q?: InputMaybe<Scalars['String']>;
};

export type PostCollectionInput = {
  automation?: InputMaybe<PostCollectionAutomationInput>;
  postIDs?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostCollectionOrder = {
  direction: OrderDirection;
  field: PostCollectionOrderField;
};

export enum PostCollectionOrderField {
  ID = 'ID'
}

export type PostCollectionRebuildPayload = {
  __typename?: 'PostCollectionRebuildPayload';
  postCollection?: Maybe<PostCollection>;
};

export type PostCollectionUpdatePayload = {
  __typename?: 'PostCollectionUpdatePayload';
  postCollection?: Maybe<PostCollection>;
};

export enum PostCommentStatus {
  ALLOW = 'ALLOW',
  DENY = 'DENY'
}

export type PostConnection = {
  __typename?: 'PostConnection';
  nodes?: Maybe<Array<Post>>;
  totalCount: Scalars['Int'];
};

export type PostCreatePayload = {
  __typename?: 'PostCreatePayload';
  menu?: Maybe<Menu>;
  post?: Maybe<Post>;
};

export enum PostCursorType {
  ALL = 'ALL',
  BEST = 'BEST',
  BOARD = 'BOARD'
}

export type PostDeleteManyPayload = {
  __typename?: 'PostDeleteManyPayload';
  posts: Array<Post>;
};

export type PostDeletePayload = {
  __typename?: 'PostDeletePayload';
  deletedPostID?: Maybe<Scalars['ID']>;
  post?: Maybe<Post>;
};

export type PostDislikePayload = {
  __typename?: 'PostDislikePayload';
  post?: Maybe<Post>;
};

export type PostFilters = {
  __typename?: 'PostFilters';
  globalNotice?: Maybe<Scalars['Boolean']>;
  views?: Maybe<Range>;
};

export type PostFiltersInput = {
  boardID?: InputMaybe<Scalars['ID']>;
  commentUserID?: InputMaybe<Scalars['ID']>;
  excludedBoardIDs?: InputMaybe<Array<Scalars['ID']>>;
  field?: InputMaybe<Scalars['String']>;
  globalNotice?: InputMaybe<Scalars['Boolean']>;
  minimumCommentCount?: InputMaybe<Scalars['Int']>;
  minimumLikeCount?: InputMaybe<Scalars['Int']>;
  minimumViewCount?: InputMaybe<Scalars['Int']>;
  onlyDelete?: InputMaybe<Scalars['Boolean']>;
  q?: InputMaybe<Scalars['String']>;
  scrapCount?: InputMaybe<Scalars['Int']>;
  tagID?: InputMaybe<Scalars['ID']>;
  userID?: InputMaybe<Scalars['ID']>;
  views?: InputMaybe<RangeInput>;
  withDelete?: InputMaybe<Scalars['Boolean']>;
  word?: InputMaybe<Scalars['String']>;
};

export type PostInput = {
  allowTrackback?: InputMaybe<Scalars['Boolean']>;
  attachmentIDs?: InputMaybe<Array<Scalars['ID']>>;
  boardID: Scalars['Int'];
  commentStatus?: InputMaybe<PostCommentStatus>;
  containsImage?: InputMaybe<Scalars['Boolean']>;
  containsYoutube?: InputMaybe<Scalars['Boolean']>;
  content: Scalars['String'];
  contentText: Scalars['String'];
  imageSrc?: InputMaybe<Scalars['String']>;
  isNotice?: InputMaybe<Scalars['Boolean']>;
  notifyMessage?: InputMaybe<Scalars['Boolean']>;
  status: PostStatus;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  youtubeSrc?: InputMaybe<Scalars['String']>;
};

export type PostLikePayload = {
  __typename?: 'PostLikePayload';
  post?: Maybe<Post>;
};

export type PostOrder = {
  direction: OrderDirection;
  field: PostOrderField;
};

export enum PostOrderField {
  COMMENT_COUNT = 'COMMENT_COUNT',
  CREATED_AT = 'CREATED_AT',
  GLOBAL_NOTICE = 'GLOBAL_NOTICE',
  ID = 'ID',
  LIKES = 'LIKES',
  SCORE = 'SCORE',
  SCRAP_COUNT = 'SCRAP_COUNT',
  UPDATED_AT = 'UPDATED_AT',
  VIEWS = 'VIEWS'
}

export type PostRatePayload = {
  __typename?: 'PostRatePayload';
  post?: Maybe<Post>;
};

export type PostReadPayload = {
  __typename?: 'PostReadPayload';
  post?: Maybe<Post>;
};

export type PostRemoveLikePayload = {
  __typename?: 'PostRemoveLikePayload';
  post?: Maybe<Post>;
};

export type PostReportFilters = {
  /** 신고날짜 종료일 */
  endDate?: InputMaybe<Scalars['Date']>;
  /** 링커리어 사이트에 등록된 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 안읽은 신고 내역 있는지 여부 */
  reportReadStatus?: InputMaybe<ReportReadStatus>;
  /** 신고날짜 시작일 */
  startDate?: InputMaybe<Scalars['Date']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']>;
  /** 회원 아이디 */
  userID?: InputMaybe<Scalars['ID']>;
};

export type PostReportOrder = {
  direction: OrderDirection;
  field: PostReportOrderField;
};

export enum PostReportOrderField {
  DELETED_AT = 'DELETED_AT',
  ID = 'ID',
  LAST_REPORTED_AT = 'LAST_REPORTED_AT',
  REPORT_COUNT = 'REPORT_COUNT'
}

export type PostSearchFiltersInput = {
  boardSlugs?: InputMaybe<Array<Scalars['String']>>;
  minimumShouldMatch?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
};

export enum PostSearchOrderField {
  CREATED_AT = 'CREATED_AT',
  RELEVANCE = 'RELEVANCE',
  VIEW_COUNT = 'VIEW_COUNT'
}

export type PostSearchOrderInput = {
  direction: OrderDirection;
  field: PostSearchOrderField;
};

export type PostSearchResult = {
  __typename?: 'PostSearchResult';
  score?: Maybe<Scalars['Float']>;
  source?: Maybe<Post>;
};

export type PostSearchResultConnection = {
  __typename?: 'PostSearchResultConnection';
  nodes?: Maybe<Array<Maybe<PostSearchResult>>>;
  totalCount: Scalars['Int'];
};

export enum PostStatus {
  PUBLIC = 'PUBLIC',
  TEMP = 'TEMP'
}

export type PostTrashFilters = {
  /** 신고날짜 종료일 */
  endDate?: InputMaybe<Scalars['Date']>;
  /** 링커리어 사이트에 등록된 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 신고날짜 시작일 */
  startDate?: InputMaybe<Scalars['Date']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']>;
  /** 회원 아이디 */
  userID?: InputMaybe<Scalars['ID']>;
};

export type PostTrashOrder = {
  direction: OrderDirection;
  field: PostTrashOrderField;
};

export enum PostTrashOrderField {
  DELETED_AT = 'DELETED_AT',
  ID = 'ID',
  LAST_REPORTED_AT = 'LAST_REPORTED_AT'
}

export type PostUpdateInput = {
  allowTrackback?: InputMaybe<Scalars['Boolean']>;
  attachmentIDs?: InputMaybe<Array<Scalars['ID']>>;
  boardID?: InputMaybe<Scalars['Int']>;
  commentStatus?: InputMaybe<PostCommentStatus>;
  containsImage?: InputMaybe<Scalars['Boolean']>;
  containsYoutube?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  contentText?: InputMaybe<Scalars['String']>;
  globalNotice?: InputMaybe<Scalars['Boolean']>;
  imageSrc?: InputMaybe<Scalars['String']>;
  isNotice?: InputMaybe<Scalars['Boolean']>;
  notifyMessage?: InputMaybe<Scalars['Boolean']>;
  postCollectionIDs?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<PostStatus>;
  /** tag table을 따로 관리하면서 추가됨 */
  tagIDs?: InputMaybe<Array<Scalars['ID']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
  youtubeSrc?: InputMaybe<Scalars['String']>;
};

export type PostUpdateManyInput = {
  globalNotice?: InputMaybe<Scalars['Boolean']>;
};

export type PostUpdateManyPayload = {
  __typename?: 'PostUpdateManyPayload';
  posts: Array<Post>;
};

export type PostUpdatePayload = {
  __typename?: 'PostUpdatePayload';
  post?: Maybe<Post>;
};

export type PostsUpdateInput = {
  isDelete: Scalars['Boolean'];
  postIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type PostsUpdatePayload = {
  __typename?: 'PostsUpdatePayload';
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Query = {
  __typename?: 'Query';
  banLogs?: Maybe<BanLogConnection>;
  bestOfBestPostPreviews?: Maybe<PostConnection>;
  bestOfBestRequirement?: Maybe<CollectionRequirement>;
  bestPostList?: Maybe<BestPostListPayload>;
  bestPostRequirement?: Maybe<CollectionRequirement>;
  board?: Maybe<Board>;
  boardBySlug?: Maybe<Board>;
  boardNavigation?: Maybe<BoardNavigation>;
  boardNavigations?: Maybe<BoardNavigationConnection>;
  boards?: Maybe<BoardConnection>;
  boardsByID?: Maybe<Array<Maybe<Board>>>;
  bookmarks: BookmarkableConnection;
  comment?: Maybe<Comment>;
  /** 댓글 신고 내역 조회 */
  commentAbuseReportLogs: CommentAbuseReportLogConnection;
  comments?: Maybe<CommentConnection>;
  config?: Maybe<Config>;
  configsAll: Array<Config>;
  currentAdByPlacementCode?: Maybe<Ad>;
  currentUser?: Maybe<User>;
  currentUserScrap?: Maybe<UserScrap>;
  currentUserScraps: CurrentUserScrapConnection;
  currentUserScrapsCount: Scalars['Int'];
  dailyCommentByUsers?: Maybe<DailyCommentByUserConnection>;
  dailyPostByUsers?: Maybe<DailyPostByUserConnection>;
  externalNotificationsUnreadCount: Scalars['Int'];
  menu?: Maybe<Menu>;
  message?: Maybe<Message>;
  messageUnreadCount: Scalars['Int'];
  messages?: Maybe<MessageConnection>;
  messagesByUserId?: Maybe<MessageConnection>;
  notifications?: Maybe<NotificationConnection>;
  notificationsUnreadCount: Scalars['Int'];
  oidcClientID: Scalars['String'];
  post?: Maybe<Post>;
  /** 게시글 신고 내역 조회 */
  postAbuseReportLogs: PostAbuseReportLogConnection;
  postCollection?: Maybe<PostCollection>;
  postCollections?: Maybe<PostCollectionConnection>;
  postCollectionsByID?: Maybe<Array<Maybe<PostCollection>>>;
  postSearch?: Maybe<PostSearchResultConnection>;
  posts?: Maybe<PostConnection>;
  postsByID?: Maybe<Array<Maybe<Post>>>;
  /** 신고된 댓글 조회 */
  reportedComments?: Maybe<CommentConnection>;
  /** 신고된 게시물 조회 */
  reportedPosts?: Maybe<PostConnection>;
  tag?: Maybe<Tag>;
  tags: TagConnection;
  tagsByID: Array<Tag>;
  trash: Trash;
  /** 삭제된 댓글 조회 */
  trashedComments?: Maybe<CommentConnection>;
  /** 삭제된 게시물 조회 */
  trashedPosts?: Maybe<PostConnection>;
  trashes: TrashConnection;
  user?: Maybe<User>;
  users: UserConnection;
  usersByID: Array<User>;
};


export type QuerybanLogsArgs = {
  filterBy?: InputMaybe<BanLogsFilter>;
  orderBy?: InputMaybe<BanLogsOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerybestOfBestPostPreviewsArgs = {
  filterBy?: InputMaybe<PostFiltersInput>;
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerybestPostListArgs = {
  input: BestPostListInput;
};


export type QueryboardArgs = {
  id: Scalars['ID'];
};


export type QueryboardBySlugArgs = {
  boardSlug: Scalars['String'];
  boardTab?: InputMaybe<BoardTab>;
  isBest?: InputMaybe<Scalars['Boolean']>;
  isNotice?: InputMaybe<Scalars['Boolean']>;
};


export type QueryboardNavigationArgs = {
  id: Scalars['ID'];
};


export type QueryboardNavigationsArgs = {
  filterBy?: InputMaybe<BoardNavigationFiltersInput>;
};


export type QueryboardsArgs = {
  filterBy?: InputMaybe<BoardFiltersInput>;
  pagination?: InputMaybe<Pagination>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryboardsByIDArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerybookmarksArgs = {
  orderBy?: InputMaybe<BookmarkOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerycommentArgs = {
  id: Scalars['ID'];
};


export type QuerycommentAbuseReportLogsArgs = {
  filterBy?: InputMaybe<CommentAbuseReportLogFilters>;
  orderBy?: InputMaybe<CommentAbuseReportLogOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerycommentsArgs = {
  filterBy?: InputMaybe<CommentFiltersInput>;
  orderBy?: InputMaybe<CommentOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryconfigArgs = {
  id: Scalars['ID'];
};


export type QuerycurrentAdByPlacementCodeArgs = {
  code: Scalars['String'];
  currentTime: Scalars['String'];
};


export type QuerycurrentUserScrapArgs = {
  postID: Scalars['ID'];
};


export type QuerycurrentUserScrapsArgs = {
  filterBy?: InputMaybe<CurrentUserScrapsFilter>;
  orderBy?: InputMaybe<UserScrapOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerycurrentUserScrapsCountArgs = {
  filterBy: CurrentUserScrapsFilter;
};


export type QuerydailyCommentByUsersArgs = {
  filterBy?: InputMaybe<DailyCommentByUserFilters>;
  orderBy?: InputMaybe<DailyCommentByUserOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerydailyPostByUsersArgs = {
  filterBy?: InputMaybe<DailyPostByUserFilters>;
  orderBy?: InputMaybe<DailyPostByUserOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerymessageArgs = {
  id: Scalars['ID'];
};


export type QuerymessagesArgs = {
  orderBy?: InputMaybe<MessageOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerymessagesByUserIdArgs = {
  filterBy?: InputMaybe<MessageFiltersInput>;
  orderBy?: InputMaybe<MessageOrder>;
  pagination?: InputMaybe<Pagination>;
  userID: Scalars['ID'];
};


export type QuerypostArgs = {
  fromBestList?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  permissionType?: InputMaybe<PermissionType>;
};


export type QuerypostAbuseReportLogsArgs = {
  filterBy?: InputMaybe<PostAbuseReportLogFilters>;
  orderBy?: InputMaybe<PostAbuseReportLogOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerypostCollectionArgs = {
  id: Scalars['ID'];
};


export type QuerypostCollectionsArgs = {
  filterBy?: InputMaybe<PostCollectionFiltersInput>;
  orderBy?: InputMaybe<PostCollectionOrder>;
  pagination?: InputMaybe<Pagination>;
  query?: InputMaybe<Scalars['String']>;
};


export type QuerypostCollectionsByIDArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerypostSearchArgs = {
  filterBy: PostSearchFiltersInput;
  orderBy?: InputMaybe<PostSearchOrderInput>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerypostsArgs = {
  filterBy?: InputMaybe<PostFiltersInput>;
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
  query?: InputMaybe<Scalars['String']>;
};


export type QuerypostsByIDArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryreportedCommentsArgs = {
  filterBy?: InputMaybe<CommentReportFilters>;
  orderBy?: InputMaybe<CommentReportOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryreportedPostsArgs = {
  filterBy?: InputMaybe<PostReportFilters>;
  orderBy?: InputMaybe<PostReportOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerytagArgs = {
  id: Scalars['ID'];
};


export type QuerytagsArgs = {
  filterBy?: InputMaybe<TagFilters>;
  orderBy?: InputMaybe<TagOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerytagsByIDArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerytrashArgs = {
  id: Scalars['ID'];
};


export type QuerytrashedCommentsArgs = {
  filterBy?: InputMaybe<CommentTrashFilters>;
  orderBy?: InputMaybe<CommentTrashOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerytrashedPostsArgs = {
  filterBy?: InputMaybe<PostTrashFilters>;
  orderBy?: InputMaybe<PostTrashOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QuerytrashesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
};


export type QueryusersArgs = {
  filterBy?: InputMaybe<UserFilters>;
  orderBy?: InputMaybe<UserOrder>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryusersByIDArgs = {
  ids: Array<Scalars['ID']>;
};

export type Range = {
  __typename?: 'Range';
  gte?: Maybe<Scalars['Int']>;
};

export type RangeInput = {
  gte?: InputMaybe<Scalars['Int']>;
};

export enum RatingType {
  CANCEL = 'CANCEL',
  DISLIKE = 'DISLIKE',
  LIKE = 'LIKE'
}

export type RemoveBookmarkPayload = {
  __typename?: 'RemoveBookmarkPayload';
  bookmarkable?: Maybe<Bookmarkable>;
  /** @deprecated Use `bookmarkable`. */
  menu?: Maybe<Menu>;
};

export type ReportCommentInput = {
  commentID: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
};

export type ReportCommentPayload = {
  __typename?: 'ReportCommentPayload';
  comment?: Maybe<Comment>;
};

export type ReportPostInput = {
  description?: InputMaybe<Scalars['String']>;
  postID: Scalars['ID'];
};

export type ReportPostPayload = {
  __typename?: 'ReportPostPayload';
  post?: Maybe<Post>;
};

export enum ReportReadStatus {
  READ = 'READ',
  UNREAD = 'UNREAD'
}

export type RestorePostPayload = {
  __typename?: 'RestorePostPayload';
  post?: Maybe<Post>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type TagConnection = {
  __typename?: 'TagConnection';
  nodes: Array<Tag>;
  totalCount: Scalars['Int'];
};

export type TagCreatePayload = {
  __typename?: 'TagCreatePayload';
  tag?: Maybe<Tag>;
};

export type TagDeleteManyPayload = {
  __typename?: 'TagDeleteManyPayload';
  tags: Array<Tag>;
};

export type TagDeletePayload = {
  __typename?: 'TagDeletePayload';
  tag?: Maybe<Tag>;
};

export type TagFilters = {
  q?: InputMaybe<Scalars['String']>;
};

export type TagInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type TagOrder = {
  direction: OrderDirection;
  field: TagOrderField;
};

export enum TagOrderField {
  CREATED_AT = 'CREATED_AT',
  ID = 'ID',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT'
}

export type TagUpdatePayload = {
  __typename?: 'TagUpdatePayload';
  tag?: Maybe<Tag>;
};

export type Trash = {
  __typename?: 'Trash';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ipAddrress?: Maybe<Scalars['String']>;
  originModule?: Maybe<Scalars['String']>;
  serializedObject?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userID?: Maybe<Scalars['Int']>;
};

export type TrashConnection = {
  __typename?: 'TrashConnection';
  nodes: Array<Trash>;
  totalCount: Scalars['Int'];
};

export type TrashCreatePayload = {
  __typename?: 'TrashCreatePayload';
  trash?: Maybe<Trash>;
};

export type TrashInput = {
  createdAt: Scalars['Date'];
  description?: InputMaybe<Scalars['String']>;
  ipAddrress?: InputMaybe<Scalars['String']>;
  originModule?: InputMaybe<Scalars['String']>;
  serializedObject?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  userID?: InputMaybe<Scalars['Int']>;
};

export type UnbanLogsPayLoad = {
  __typename?: 'UnbanLogsPayLoad';
  unbanLogs?: Maybe<Array<Maybe<BanLog>>>;
};

/** linkareer 전용. 이후 모듈화 할 때 제거될 것 */
export type User = {
  __typename?: 'User';
  allowMessage?: Maybe<Scalars['Boolean']>;
  banLog?: Maybe<BanLogConnection>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastBanLog?: Maybe<BanLog>;
  nickname?: Maybe<Scalars['String']>;
  posts?: Maybe<PostConnection>;
  profileImageURL?: Maybe<Scalars['String']>;
  scrapCount?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};


/** linkareer 전용. 이후 모듈화 할 때 제거될 것 */
export type UserpostsArgs = {
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  nodes: Array<User>;
  totalCount: Scalars['Int'];
};

export type UserFilters = {
  q?: InputMaybe<Scalars['String']>;
};

export type UserOrder = {
  direction: OrderDirection;
  field: UserOrderField;
};

export enum UserOrderField {
  ID = 'ID'
}

export type UserScrap = {
  __typename?: 'UserScrap';
  createdAt?: Maybe<Scalars['Date']>;
  deletedAt?: Maybe<Scalars['Date']>;
  externalID?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  listOrder?: Maybe<Scalars['Int']>;
  post?: Maybe<Post>;
  postID: Scalars['ID'];
  userID: Scalars['ID'];
};

export type UserScrapOrder = {
  direction: OrderDirection;
  field: UserScrapOrderField;
};

export enum UserScrapOrderField {
  CREATED_AT = 'CREATED_AT',
  LIST_ORDER = 'LIST_ORDER'
}

export type QueryPostsQueryVariables = Exact<{
  orderBy?: InputMaybe<PostOrder>;
  pagination?: InputMaybe<Pagination>;
}>;


export type QueryPostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostConnection', totalCount: number, nodes?: Array<{ __typename?: 'Post', title?: string | null, id: string, createdAt: number, views: number, likes: number, url?: string | null, nickname?: string | null, board?: { __typename?: 'Board', title: string } | null }> | null } | null };


export const QueryPostsDocument = `
    query QueryPosts($orderBy: PostOrder, $pagination: Pagination) {
  posts(orderBy: $orderBy, pagination: $pagination) {
    totalCount
    nodes {
      title
      id
      createdAt
      views
      likes
      url
      nickname
      board {
        title
      }
    }
  }
}
    `;
export const useQueryPosts = <
      TData = QueryPostsQuery,
      TError = unknown
    >(
      variables?: QueryPostsQueryVariables,
      options?: UseQueryOptions<QueryPostsQuery, TError, TData>
    ) =>
    useQuery<QueryPostsQuery, TError, TData>(
      variables === undefined ? ['QueryPosts'] : ['QueryPosts', variables],
      graphqlFetcher<QueryPostsQuery, QueryPostsQueryVariables>(QueryPostsDocument, variables),
      options
    );

useQueryPosts.getKey = (variables?: QueryPostsQueryVariables) => variables === undefined ? ['QueryPosts'] : ['QueryPosts', variables];
;

export const useInfiniteQueryPosts = <
      TData = QueryPostsQuery,
      TError = unknown
    >(
      variables?: QueryPostsQueryVariables,
      options?: UseInfiniteQueryOptions<QueryPostsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<QueryPostsQuery, TError, TData>(
      variables === undefined ? ['QueryPosts.infinite'] : ['QueryPosts.infinite', variables],
      (metaData) => graphqlFetcher<QueryPostsQuery, QueryPostsQueryVariables>(QueryPostsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};


useInfiniteQueryPosts.getKey = (variables?: QueryPostsQueryVariables) => variables === undefined ? ['QueryPosts.infinite'] : ['QueryPosts.infinite', variables];
;

useQueryPosts.fetcher = (variables?: QueryPostsQueryVariables, options?: RequestInit['headers']) => graphqlFetcher<QueryPostsQuery, QueryPostsQueryVariables>(QueryPostsDocument, variables, options);