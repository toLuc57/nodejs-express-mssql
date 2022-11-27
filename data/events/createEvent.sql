INSERT INTO [dbo].[Category]
(
    [Name]
    ,[Slug]
    ,[ParentId]
    ,[Orders]
    ,[Metakey]
    ,[Metadesc]
    ,[CreateBy]
    ,[CreateAt]
    ,[UpdateBy]
    ,[UpdateAt]
    ,[Status]
)
VALUES 
(
    @name,
    @slug,
    @parentId,
    @orders,
    @metakey,
    @metadesc,
    @createBy,
    @createAt,
    @updateBy,
    @updateAt,
    @status
)

select SCOPE_IDENTITY() AS [Id]